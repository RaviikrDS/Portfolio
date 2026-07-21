from pydantic import BaseModel, EmailStr, Field


class ContactRequest(BaseModel):

    name: str = Field(..., min_length=2, max_length=100)

    email: EmailStr

    subject: str = Field(..., min_length=2, max_length=200)

    message: str = Field(..., min_length=5)


class ContactResponse(BaseModel):

    success: bool

    message: str

    contact_id: str