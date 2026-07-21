"""
Contact Repository.

Responsible for coordinating persistence
for contact requests.
"""

from typing import Any

from app.repositories.dynamodb_repository import DynamoDBRepository
from app.repositories.s3_repository import S3Repository


class ContactRepository:
    """Repository for contact persistence."""

    @staticmethod
    def save(
        payload: dict[str, Any],
        metadata: dict[str, Any],
    ) -> dict:
        """
        Persist a contact request.

        Args:
            payload: Complete contact payload to store in S3.
            metadata: Searchable metadata to store in DynamoDB.

        Returns:
            Persistence result.
        """

        contact_id = payload["contact_id"]

        received_at = payload["received_at"]

        date_path = received_at[:10].replace("-", "/")

        s3_key = f"contacts/{date_path}/{contact_id}.json"

        # Upload complete payload to S3
        S3Repository.upload(
            key=s3_key,
            data=payload,
        )

        # Add S3 reference to metadata
        metadata["s3_key"] = s3_key

        # Save metadata to DynamoDB
        DynamoDBRepository.save(metadata)

        return {
            "saved": True,
            "contact_id": contact_id,
            "s3_key": s3_key,
            "contact": payload,
        }