"""
Contact Repository.

Responsible for coordinating persistence
for contact requests.
"""
from datetime import datetime
from app.utils.id_generator import generate_contact_id

from app.repositories.dynamodb_repository import DynamoDBRepository
from app.repositories.s3_repository import S3Repository
from app.schemas.contact import ContactRequest


class ContactRepository:
    """Repository for contact persistence."""

    @staticmethod
    def save(contact: ContactRequest) -> dict:
        """
        Save a contact request.

        Phase 3.1:
            Placeholder orchestration.

        Future:
            - Upload full payload to S3
            - Save metadata to DynamoDB
        """
        contact_id = generate_contact_id()
        date_path = datetime.utcnow().strftime("%Y/%m/%d")

        s3_key = f"contacts/{date_path}/{contact_id}.json"

        payload = {
            "contact_id": contact_id,
            "received_at": datetime.utcnow().isoformat(),
            **contact.model_dump(),
        }

        S3Repository.upload(
            key=s3_key,
            data=payload,
        )

        DynamoDBRepository.save(
            {
                "contact_id": contact_id,
                "name": contact.name,
                "email": contact.email,
                "subject": contact.subject,
                "received_at": payload["received_at"],
                "s3_key": s3_key,
            }
        )

        return {
            "saved": True,
            "contact_id": contact_id,
            "s3_key": s3_key,
            "contact": payload,
        }