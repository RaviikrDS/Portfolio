# Portfolio Backend

## Overview

The Portfolio Backend is a robust, scalable API service built with **FastAPI** to power the contact and notification features of a professional portfolio website. It is designed to securely handle user interactions, log activities, and provide real-time notifications, ensuring a seamless and reliable backend experience. The system integrates with Google Sheets for persistent logging and Twilio for instant WhatsApp notifications, all while maintaining comprehensive local logs and automated maintenance.

---

## Folder Structure

```
backend/
│
├── main.py             # FastAPI application entry point
├── twilio_utils.py     # Utility for sending WhatsApp notifications via Twilio
├── Logs/               # Directory for application log files
│   └── app.log         # Main log file
└── ReadMe.MD           # Project documentation
```

---

## How to Configure

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd Project/Portfolio/my-portfolio/backend
   ```

2. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set Up Environment Variables**
   - Create a `.env` file in the backend directory.
   - Add the following variables:
     ```
     GOOGLE_SCRIPT_URL=<your_google_apps_script_url>
     TWILIO_ACCOUNT_SID=<your_twilio_account_sid>
     TWILIO_AUTH_TOKEN=<your_twilio_auth_token>
     TWILIO_WHATSAPP_NUMBER=<your_twilio_whatsapp_number>
     RECEIVER_WHATSAPP_NUMBER=<receiver_whatsapp_number>
     ```
   - Ensure your Google Apps Script endpoint is deployed and accessible.

4. **Run the Application**
   ```bash
   uvicorn main:app --reload
   ```

5. **CORS Configuration**
   - By default, only requests from `http://localhost:5173` are allowed.
   - Update the `allow_origins` parameter in `main.py` if your frontend runs on a different domain.

---

## Conclusion

This backend solution is tailored for modern portfolio websites, offering secure contact handling, real-time notifications, and reliable logging. Its modular design and integration capabilities make it easy to extend and maintain. For any issues or enhancements, please refer to the documentation or contact the project maintainer.

