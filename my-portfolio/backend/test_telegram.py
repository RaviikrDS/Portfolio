from app.notifications.telegram_service import TelegramService

result = TelegramService.send(
    "✅ Hello from Portfolio Backend!"
)

print(result)