from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from datetime import datetime
import requests
from dotenv import load_dotenv
import os
from fastapi.middleware.cors import CORSMiddleware
from twilio_utils import send_whatsapp_notification
import logging

load_dotenv()

GOOGLE_SCRIPT_URL = os.getenv("GOOGLE_SCRIPT_URL")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

LOGS_DIR = os.path.join(os.path.dirname(__file__), "Logs")
os.makedirs(LOGS_DIR, exist_ok=True)
LOG_FILE = os.path.join(LOGS_DIR, "app.log")

logging.basicConfig(
    filename=LOG_FILE,
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(message)s"
)

# Standard logging for app startup
logging.info("FastAPI application started.")

class ContactForm(BaseModel):
    name: str
    email: str
    message: str

@app.post("/contact")
async def contact(data: ContactForm):
    logging.info(f"Received contact form submission: name={data.name}, email={data.email}")
    payload = {
        "name": data.name,
        "email": data.email,
        "message": data.message,
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
    }

    try:
        #Log to Google Sheets
        response = requests.post(GOOGLE_SCRIPT_URL, json=payload)
        if response.status_code != 200:
            logging.error(f"Failed to send to Google Sheet: status_code={response.status_code}, response={response.text}")
            raise HTTPException(status_code=500, detail="Failed to send to Google Sheet")

        # WhatsApp notification
        send_whatsapp_notification(data.name, data.email, data.message)
        logging.info(f"Contact form submitted and WhatsApp notification sent: {payload}")
        return {"status": "success", "message": "Message logged and WhatsApp notification sent!"}
    except Exception as e:
        logging.error(f"Error in contact submission: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

from fastapi import Response

@app.delete("/logs/cleanup")
def cleanup_logs(response: Response):
    logging.info("Log cleanup endpoint called.")
    try:
        now = datetime.now()
        deleted_files = []
        for filename in os.listdir(LOGS_DIR):
            file_path = os.path.join(LOGS_DIR, filename)
            if os.path.isfile(file_path):
                file_mtime = datetime.fromtimestamp(os.path.getmtime(file_path))
                if (now - file_mtime).days > 30:
                    os.remove(file_path)
                    deleted_files.append(filename)
        logging.info(f"Deleted log files: {deleted_files}")
        logging.info("Log cleanup completed successfully.")
        return {"status": "success", "deleted_files": deleted_files}
    except Exception as e:
        logging.error(f"Error cleaning up logs: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
