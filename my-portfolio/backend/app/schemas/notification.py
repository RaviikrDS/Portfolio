from pydantic import BaseModel


class NotificationResponse(BaseModel):

    success: bool

    provider: str

    message: str