## 📬 BulkMail App – Send Emails in Bulk with Ease

BulkMail-App is a full-stack MERN-based application that allows users to send bulk emails using an Excel file or manual input. It demonstrates real-world backend workflows like file handling, email automation, and secure environment management.

---

## 🚀 Features

- ✉️ Send bulk emails to multiple users  
- 📂 Upload Excel file (.xlsx) with email list  
- 📝 Custom email message input  
- ⚡ Async email sending for better performance  
- 🌐 Simple and clean React UI  
- 🔐 Secure credentials using `.env`  
- 🗄️ MongoDB Atlas integration  

---

## 🔧 Technologies Used

- React.js  
- Axios  
- XLSX  
- Tailwind CSS  
- Node.js  
- Express.js  
- Nodemailer  
- MongoDB (Mongoose)  
- dotenv  

---

## 🛠️ Installation

```bash
git clone https://github.com/thejayakumar-k/BulkMail-App.git
cd BulkMail-App
```

---

## 🔐 Setup Environment Variables

Create a `.env` file inside the backend folder:

```ini
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

⚠️ Do NOT upload `.env` file to GitHub

---

## ▶️ Run the Application

```bash
cd backend
npm install
node index.js
```

```bash
cd frontend
npm install
npm start
```

---

## 📤 How It Works

- Enter your email message  
- Upload Excel file with email list  
- Click Send  
- Emails are sent to all recipients  

---

## 📊 Excel Format

```text
email1@gmail.com
email2@gmail.com
email3@gmail.com
```

---

## 🔒 Security Notes

- MongoDB access is restricted using IP whitelist  
- Environment variables protect sensitive data  
- `.env` file is excluded via `.gitignore`  
- Use Gmail App Password instead of real password  

---

## 🌍 Deployment Strategy

- Deploy frontend on Vercel  
- Keep backend private (local or secured server)  
- Do NOT expose email API publicly  
- Add authentication and rate limiting if deploying backend  

---

## 🎯 Use Cases

- Bulk email campaigns  
- Email system testing  
- Learning MERN stack  
- File upload and parsing projects  

---

## 🧠 What I Learned

- Excel file handling using XLSX  
- Email sending using Nodemailer  
- MongoDB Atlas integration  
- Full-stack development workflow  
- Secure credential management  

---

## 🔮 Future Improvements

- User authentication system  
- Email templates (HTML support)  
- Rate limiting for security  
- Email success/failure tracking  
- Dashboard UI  

---

## 👨‍💻 Author

Jayakumar K  

---

## 📜 License

MIT License  

---

## ⭐ Support

Give this repo a ⭐ if you like it!
