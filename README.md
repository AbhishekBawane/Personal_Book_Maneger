# 📚 Personal Book Manager

A full-stack **Personal Book Manager** built using the **MERN stack**, with **Next.js** and **Tailwind CSS** powering the frontend.

The application allows users to create an account, securely log in, manage their personal book collection, organize books with tags, and track their reading progress.

---

# 🌐 Live Application

### Frontend
[Live Link](https://personal-book-maneger.vercel.app?_vercel_share=gD62dV2SQdSTSRkC4OlZOEFkNsgeWMLk)

### Backend API
https://personal-book-manager-2.onrender.com

> Replace `YOUR-VERCEL-URL` with the actual Vercel URL of the deployed frontend.

---

# 📌 Project Overview

Personal Book Manager is a full-stack web application designed to help users maintain and organize their personal reading library.

Users can:

- Create an account
- Log in securely
- Log out
- Add books
- View their books
- Edit books
- Delete books
- Add tags
- Filter books by tags
- Track reading status
- Access only their own personal books

The application uses JWT authentication to protect user-specific resources.

---

# ✨ Features

## 🔐 Authentication

- User registration
- User login
- JWT authentication
- Password hashing using bcrypt
- Protected API routes
- Persistent login using browser local storage
- Logout functionality
- Authentication middleware

---

## 📚 Book Management

Users can manage their personal book collection.

### Add Books

Users can add:

- Book title
- Author
- Tags
- Reading status

### View Books

Users can view the books associated with their account.

### Update Books

Users can modify:

- Title
- Author
- Tags
- Reading status

### Delete Books

Users can remove books from their personal library.

---

# 📖 Reading Status

Each book can have one of three reading statuses:

```text
Want to Read
Reading
Completed
