"""
Contact API endpoints.
"""

from fastapi import APIRouter, status

from app.schemas.contact import ContactRequest
from app.services.contact_service import ContactService

router = APIRouter()


@router.post(
    "/contact",
    status_code=status.HTTP_201_CREATED,
    summary="Submit a contact request",
)
async def submit_contact(contact: ContactRequest):
    """
    Submit a contact request.
    """

    return ContactService.submit_contact(contact)