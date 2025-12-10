from twilio.rest import Client
import os
from dotenv import load_dotenv
import logging

load_dotenv()

TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
TWILIO_PHONE_NUMBER = os.getenv("TWILIO_PHONE_NUMBER") or "+14155238886" 
TO_PHONE_NUMBER = os.getenv("TO_PHONE_NUMBER")

LOGS_DIR = os.path.join(os.path.dirname(__file__), "Logs")
os.makedirs(LOGS_DIR, exist_ok=True)
LOG_FILE = os.path.join(LOGS_DIR, "app.log")

logging.basicConfig(
    filename=LOG_FILE,
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(message)s"
)

def send_whatsapp_notification(name: str, email: str, message: str):
    try:
        client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
        body = f"🌐 Portfolio Inquiry Received:\n\n👤 Name: {name}\n📧 Email: {email}\n💬 Message: {message}"
        logging.info(f"Using WhatsApp from number: {TWILIO_PHONE_NUMBER}")
        client.messages.create(
            from_=f"whatsapp:{TWILIO_PHONE_NUMBER}",
            to=f"whatsapp:{TO_PHONE_NUMBER}",
            body=body
        )
        logging.info(f"WhatsApp notification sent for: {name}, {email}")
    except Exception as e:
        logging.error(f"Failed to send WhatsApp message: {e}")
