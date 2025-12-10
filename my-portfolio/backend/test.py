from twilio.rest import Client
import os
from dotenv import load_dotenv

load_dotenv()

client = Client(
    os.getenv("TWILIO_ACCOUNT_SID"),
    os.getenv("TWILIO_AUTH_TOKEN")
)

message = client.messages.create(
    from_='whatsapp:+14155238886',
    to='whatsapp:+917720005669',  # Replace with your full number
    body='Test: Hello from Twilio WhatsApp API!'
)

print("Message SID:", message.sid)
