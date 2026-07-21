"""
Contact Service.

Contains business logic for contact requests.
"""

from datetime import UTC, datetime

from app.core.logger import logger
from app.notifications.notification_manager import NotificationManager
from app.repositories.contact_repository import ContactRepository
from app.schemas.contact import ContactRequest
from app.utils.id_generator import generate_contact_id


class ContactService:
    """Business service for contact operations."""

    @staticmethod
    def submit_contact(contact: ContactRequest) -> dict:
        """
        Process a contact request.

        Args:
            contact: Validated contact request.

        Returns:
            API response.
        """

        # Generate business values
        contact_id = generate_contact_id()
        received_at = datetime.now(UTC).isoformat()

        # Build payload for S3
        payload = {
            "contact_id": contact_id,
            "received_at": received_at,
            **contact.model_dump(),
        }

        # Build metadata for DynamoDB
        metadata = {
            "contact_id": contact_id,
            "name": contact.name,
            "email": contact.email,
            "subject": contact.subject,
            "received_at": received_at,
        }

        # Persist contact
        repository_result = ContactRepository.save(
            payload=payload,
            metadata=metadata,
        )

        # Send notifications (non-blocking)
        try:
            NotificationManager.notify_contact_received(
                contact_id=contact_id,
                contact=contact,
            )
        except Exception:
            logger.exception(
                "Failed to process notifications for contact: %s",
                contact_id,
            )

        return {
            "success": True,
            "message": "Contact request received successfully.",
            "data": repository_result,
        }