📬 BulkMail App – Send Emails in Bulk with Ease

BulkMail-App is a full-stack MERN-based application that allows users to send bulk emails using an Excel file or manual input. It demonstrates real-world backend workflows like file handling, email automation, and secure environment management.

🚀 Features
✉️ Send bulk emails to multiple users
📂 Upload Excel file (.xlsx) with email list
📝 Custom email message input
⚡ Async email sending for better performance
🌐 Simple and clean React UI
🔐 Secure credentials using .env
🗄️ MongoDB Atlas integration
🔧 Technologies Used
Frontend
React.js
Axios
XLSX
Tailwind CSS
Backend
Node.js
Express.js
Nodemailer
MongoDB (Mongoose)
dotenv
🛠️ Installation
git clone https://github.com/thejayakumar-k/BulkMail-App.git
cd BulkMail-App
🔐 Setup Environment Variables

Create a .env file inside the backend folder:

MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

⚠️ Do NOT upload .env file to GitHub

▶️ Run the Application
Start Backend
cd backend
npm install
node index.js
Start Frontend
cd frontend
npm install
npm start
📤 How It Works
Enter your email message
Upload Excel file with email list
Click Send
Emails are sent to all recipients
📊 Excel Format

Your Excel file should contain emails like:

email1@gmail.com
email2@gmail.com
email3@gmail.com
🔒 Security Notes
MongoDB access is restricted using IP whitelist
Environment variables protect sensitive data
.env file is excluded via .gitignore
Recommended to use Gmail App Password instead of real password
🌍 Deployment Strategy
Recommended Approach
Deploy Frontend on Vercel
Keep Backend private (local or secured server)
Important
Do NOT expose email API publicly
Add authentication & rate limiting if deploying backend
🎯 Use Cases
Bulk email campaigns
Email system testing
Learning MERN stack
File upload + parsing projects
🧠 What I Learned
Excel file handling using XLSX
Email sending using Nodemailer
MongoDB Atlas integration
Full-stack development workflow
Secure credential management
🔮 Future Improvements
User authentication system
Email templates (HTML support)
Rate limiting for security
Email success/failure tracking
Dashboard UI
👨‍💻 Author

Jayakumar K

📜 License

This project is licensed under the MIT License

⭐ Support

If you like this project, give it a ⭐ on GitHub!
