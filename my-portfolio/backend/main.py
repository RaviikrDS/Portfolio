from fastapi import FastAPI, HTTPException, Response
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
# -----------------------------------------------------------------------------
# CORS - include Render URL, Vercel URL, and localhost for local dev
# -----------------------------------------------------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://portfolio-raviikrds.vercel.app",        # your Vercel frontend
        "https://portfolio-cmaj.onrender.com",           # Render service domain (add yours)
        "http://localhost:3000",                         # local dev (React/Vite default)
        "http://localhost:5173",                         # alternate local dev port
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Logging: file + stream so Render shows logs
LOGS_DIR = os.path.join(os.path.dirname(__file__), "Logs")
os.makedirs(LOGS_DIR, exist_ok=True)
LOG_FILE = os.path.join(LOGS_DIR, "app.log")

logger = logging.getLogger("fastapi_app")
logger.setLevel(logging.INFO)

file_handler = logging.FileHandler(LOG_FILE)
file_fmt = logging.Formatter("%(asctime)s %(levelname)s %(message)s")
file_handler.setFormatter(file_fmt)
logger.addHandler(file_handler)

stream_handler = logging.StreamHandler()
stream_handler.setFormatter(file_fmt)
logger.addHandler(stream_handler)

logger.info("FastAPI application started.")

class ContactForm(BaseModel):
    name: str
    email: str
    message: str

@app.get("/")
def root():
    return {"ok": True, "message": "running"}

@app.get("/health")
def health():
    return {"status": "healthy", "timestamp": datetime.utcnow().isoformat() + "Z"}

# Optional: explicit OPTIONS handler for quick debugging of preflight
# (You can remove this once CORS middleware is tested and working)
@app.options("/contact")
def contact_options():
    # FastAPI + CORSMiddleware should handle this automatically; this is a quick fallback.
    return Response(status_code=200)

@app.post("/contact")
async def contact(data: ContactForm):
    logger.info(f"Received contact form submission: name={data.name}, email={data.email}")

    if not GOOGLE_SCRIPT_URL:
        logger.error("Missing GOOGLE_SCRIPT_URL environment variable.")
        raise HTTPException(status_code=500, detail="Server misconfiguration")

    payload = {
        "name": data.name,
        "email": data.email,
        "message": data.message,
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
    }

    # Post to Google Script with timeout and handle errors explicitly
    try:
        resp = requests.post(GOOGLE_SCRIPT_URL, json=payload, timeout=10)
    except requests.Timeout:
        logger.exception("Timeout when calling GOOGLE_SCRIPT_URL")
        raise HTTPException(status_code=504, detail="Upstream timeout")
    except Exception:
        logger.exception("Error when calling GOOGLE_SCRIPT_URL")
        raise HTTPException(status_code=502, detail="Failed to contact upstream service")

    if resp.status_code != 200:
        logger.error(f"Google script returned {resp.status_code}: {resp.text}")
        raise HTTPException(status_code=502, detail="Failed to write to Google Sheet")

    # Send WhatsApp notification but don't let it crash the entire request silently.
    try:
        send_whatsapp_notification(data.name, data.email, data.message)
        logger.info("Whatsapp notification sent successfully!.")
    except Exception:
        logger.exception("Failed to send WhatsApp notification")

    logger.info(f"Contact form processed successfully: {payload}")
    return {"status": "success", "message": "Message logged and WhatsApp notification sent (if configured)."}

@app.delete("/logs/cleanup")
def cleanup_logs(response: Response):
    logger.info("Log cleanup endpoint called.")
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
        logger.info(f"Deleted log files: {deleted_files}")
        return {"status": "success", "deleted_files": deleted_files}
    except Exception:
        logger.exception("Error cleaning up logs")
        raise HTTPException(status_code=500, detail="Failed to cleanup logs")
