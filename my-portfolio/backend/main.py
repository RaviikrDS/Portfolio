from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from datetime import datetime
import requests
from dotenv import load_dotenv
import os
from fastapi.middleware.cors import CORSMiddleware
from twilio_utils import send_whatsapp_notification

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

class ContactForm(BaseModel):
    name: str
    email: str
    message: str

@app.post("/contact")
async def contact(data: ContactForm):
    payload = {
        "name": data.name,
        "email": data.email,
        "message": data.message,
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
    }

    try:
        # Log to Google Sheets
        response = requests.post(GOOGLE_SCRIPT_URL, json=payload)
        if response.status_code != 200:
            raise HTTPException(status_code=500, detail="Failed to send to Google Sheet")

        # WhatsApp notification
        send_whatsapp_notification(data.name, data.email, data.message)

        return {"status": "success", "message": "Message logged and WhatsApp notification sent!"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
