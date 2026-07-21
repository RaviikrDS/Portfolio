from functools import lru_cache

from pathlib import Path
from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict

BASE_DIR = Path(__file__).resolve().parent.parent.parent
class Settings(BaseSettings):
    """
    Application settings loaded from .env
    """

    model_config = SettingsConfigDict(
        env_file=BASE_DIR / ".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore",
    )

    # ======================================================
    # Application
    # ======================================================

    APP_NAME: str = Field(...)
    APP_VERSION: str = Field(...)
    APP_ENV: str = Field(...)

    # ======================================================
    # AWS
    # ======================================================

    AWS_REGION: str = Field(...)

    # ======================================================
    # S3
    # ======================================================

    AWS_S3_BUCKET_NAME: str = Field(...)

    AWS_ACCESS_KEY_ID: str = Field(...)
    AWS_SECRET_ACCESS_KEY: str = Field(...)

    # ======================================================
    # DynamoDB
    # ======================================================

    DYNAMODB_CONTACT_TABLE: str = Field(...)
    DYNAMODB_NOTIFICATION_TABLE: str = Field(...)

    # ======================================================
    # SNS
    # ======================================================

    SNS_TOPIC_ARN: str = Field(...)

    # ======================================================
    # Telegram
    # ======================================================

    TELEGRAM_BOT_TOKEN: str = Field(...)
    TELEGRAM_CHAT_ID: str = Field(...)

    # ======================================================
    # Twilio
    # ======================================================

    TWILIO_ACCOUNT_SID: str = Field(...)
    TWILIO_AUTH_TOKEN: str = Field(...)
    TWILIO_WHATSAPP_NUMBER: str = Field(...)
    YOUR_WHATSAPP_NUMBER: str = Field(...)

    # Allowed Origins
    ALLOWED_ORIGINS: str


@lru_cache
def get_settings() -> Settings:
    """
    Returns cached settings instance.
    """
    return Settings()


settings = get_settings()