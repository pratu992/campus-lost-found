# 🎒 Campus Lost & Found System

A modern full-stack MERN application that helps students and staff report, search, and manage lost and found items on campus. The platform provides a simple and secure way to reconnect owners with their belongings through an intuitive web interface.

---

## 🌐 Live Demo

**Frontend:** https://campus-lost-found-xx6s.vercel.app

**Backend API:Node.js + Express.js backend connected to MongoDB Atlas.

---

## 📌 Features

### 👤 User Authentication
- Secure user registration
- Login with JWT Authentication
- Password encryption using bcrypt
- Session management

### 📦 Item Management
- Report Lost Items
- Report Found Items
- Edit Item Details
- Delete Items
- Mark Items as Returned

### 🔍 Search & Filter
- Search items by title
- Filter by category
- Filter by Lost / Found type
- Real-time updates

### 📊 Dashboard
- Total Items
- Lost Items
- Found Items
- Returned Items
- Quick navigation cards

### 🎨 Modern User Interface
- Responsive design
- Glassmorphism inspired authentication pages
- Smooth animations
- Toast notifications
- Mobile-friendly layout

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Framer Motion
- React Hot Toast
- React Icons

## Backend
- Node.js
- Express.js
- JWT Authentication
- bcryptjs
- CORS
- dotenv

## Database
- MongoDB Atlas
- Mongoose

## Deployment
- Frontend: Vercel
- Backend: *(Your deployment platform)*
- Database: MongoDB Atlas

---

# 📂 Project Structure

```
Campus-Lost-Found/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/pratu992/campus-lost-found.git
```

```bash
cd campus-lost-found
```

---

## Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the server folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Run the backend:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file inside the client folder.

```env
VITE_API_URL=http://localhost:5000/api
```

Run the frontend:

```bash
npm run dev
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |

---

## Items

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/items` | Get All Items |
| POST | `/api/items` | Create Item |
| GET | `/api/items/:id` | Get Single Item |
| PUT | `/api/items/:id` | Update Item |
| DELETE | `/api/items/:id` | Delete Item |
| PUT | `/api/items/:id/return` | Mark Returned |

---

# 🖼️ Screenshots


-## 🖼️ Screenshots

The application includes:

- Login Page
- Registration Page
- Dashboard
- Report Lost Item
- Report Found Item
- View Items
- Responsive Mobile Interface

*(Screenshots can be added here.)*
---

# 🔒 Security

- JWT Authentication
- Password Hashing (bcrypt)
- Protected Routes
- Environment Variables
- MongoDB Atlas Security

---

# 🚀 Future Enhancements

- Email Notifications
- Image Upload Support
- Admin Dashboard
- AI-Based Item Matching
- QR Code Integration
- Claim Verification
- Advanced Search
- Push Notifications

---

# 👨‍💻 Author

**Pramath S**

B.Tech Computer Science Engineering

Jain University

GitHub: https://github.com/pratu992

---

# 📄 License

This project is developed for educational purposes as part of a college academic project.

---

## ⭐ If you like this project, consider giving it a star on GitHub!