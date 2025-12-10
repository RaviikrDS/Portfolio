# Portfolio Project

## Overview

This repository contains a full-stack portfolio project designed to showcase professional skills and facilitate secure communication via a contact form. The solution features a modern frontend (e.g., React) and a robust backend built with **FastAPI**. The backend handles contact form submissions, logs activities to Google Sheets, sends real-time WhatsApp notifications via Twilio, and maintains local logs for auditing and maintenance. The architecture is modular, scalable, and ready for deployment.

---

## Folder Structure

```
Portfolio/
│
├── backend/
│   ├── main.py             # FastAPI application entry point
│   ├── twilio_utils.py     # WhatsApp notification utility
│   ├── Logs/               # Log files directory
│   │   └── app.log         # Main log file
│   └── ReadMe.MD           # Backend documentation
│
├── frontend/               # (Example) React or other frontend app
│   ├── src/
│   │   └── ...             # Frontend source code
│   ├── public/
│   └── package.json
│
├── README.md               # Project root documentation (this file)
└── ...                     # Other project files and folders
```

---

## How to Configure

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Project/Portfolio
```

### 2. Backend Setup

- Navigate to the backend directory:
  ```bash
  cd backend
  ```
- Install dependencies:
  ```bash
  pip install -r requirements.txt
  ```
- Configure environment variables:
  - Rename `.env.template` to `.env` and add your secrets:
    ```
    GOOGLE_SCRIPT_URL=<your_google_apps_script_url>
    TWILIO_ACCOUNT_SID=<your_twilio_account_sid>
    TWILIO_AUTH_TOKEN=<your_twilio_auth_token>
    TWILIO_WHATSAPP_NUMBER=<your_twilio_whatsapp_number>
    RECEIVER_WHATSAPP_NUMBER=<receiver_whatsapp_number>
    ```
- Set up Google Sheets integration:
  - Create a Google Cloud service account and download `google_creds.json`.
  - Share your Google Sheet with the service account email.
  - Set the `GOOGLE_SCRIPT_URL` in your `.env` file to your deployed Google Apps Script endpoint.
- Set up Twilio WhatsApp:
  - Register at [Twilio WhatsApp](https://www.twilio.com/whatsapp).
  - Obtain your Account SID and Auth Token.
  - Use the sandbox number or your Twilio WhatsApp number.
  - Add your verified number to the sandbox.
- Run the FastAPI server:
  ```bash
  uvicorn main:app --reload
  ```

### 3. Frontend Setup

- Navigate to the frontend directory:
  ```bash
  cd ../frontend
  ```
- Install dependencies (example for React):
  ```bash
  npm install
  ```
- Start the frontend development server:
  ```bash
  npm start
  ```
- Example integration with backend:
  ```js
  fetch("http://localhost:8000/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message })
  });
  ```

---

## Conclusion

This portfolio project provides a secure, scalable, and extensible solution for showcasing your work and enabling direct communication. The backend ensures reliable handling of contact requests, real-time notifications, and persistent logging, while the frontend delivers a modern user experience. For further customization or support, refer to the backend and frontend documentation or contact the project maintainer.

---