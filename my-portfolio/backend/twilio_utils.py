from twilio.rest import Client
import os
from dotenv import load_dotenv

load_dotenv()

TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
TWILIO_PHONE_NUMBER = os.getenv("TWILIO_PHONE_NUMBER") 
TO_PHONE_NUMBER = os.getenv("TO_PHONE_NUMBER")

def send_whatsapp_notification(name: str, email: str, message: str):
    try:
        client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
        body = f"📩 New Contact Form Submission:\n\n👤 Name: {name}\n📧 Email: {email}\n💬 Message: {message}"
        client.messages.create(
            from_=f"whatsapp:{TWILIO_PHONE_NUMBER}",
            to=f"whatsapp:{TO_PHONE_NUMBER}",
            body=body
        )
    except Exception as e:
        print(f"Failed to send WhatsApp message: {e}")
