# Contact API Backend

## 1. Setup

### Install dependencies:
```bash
pip install -r requirements.txt
```

### 2. Google Sheets

- Go to https://console.cloud.google.com/
- Create a service account and download `google_creds.json`
- Share the created Google Sheet with the service account email

### 3. Twilio WhatsApp Setup

- Register at [https://www.twilio.com/whatsapp](https://www.twilio.com/whatsapp)
- Get your Account SID, Auth Token
- Use the sandbox number: `+14155238886`
- Add your verified number to the sandbox

### 4. Run FastAPI server
```bash
uvicorn main:app --reload
```

### 5. Connect from React
```js
fetch("http://localhost:8000/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, message })
});
```

## .env
Rename `.env.template` to `.env` and add your secrets.