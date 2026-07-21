"""
Contact Service.

Contains business logic for contact requests.

Phase 2:
    - Accept validated request
    - Delegate persistence to repository

Future:
    - Validate business rules
    - Store files in S3
    - Store metadata in DynamoDB
    - Publish SNS events
    - Trigger notifications
"""

from app.repositories.contact_repository import ContactRepository
from app.schemas.contact import ContactRequest


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

        repository_result = ContactRepository.save(contact)

        return {
            "success": True,
            "message": "Contact request received successfully.",
            "data": repository_result["contact"],
        }