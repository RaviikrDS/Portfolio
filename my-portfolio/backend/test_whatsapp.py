from app.notifications.whatsapp_service import WhatsAppService

result = WhatsAppService.send(
    "✅ Hello from Portfolio Backend via Meta WhatsApp Cloud API!"
)

print(result)