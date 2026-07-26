# 🎯 QuizVerse - AI-Powered Interactive Quiz Platform

> **Live Application:** https://quiz-verse-2vtm.vercel.app](https://quiz-verse-2vtm.vercel.app)  
> **GitHub Repository:** https://github.com/Nadia-ai-gif/QuizVerse](https://github.com/Nadia-ai-gif/QuizVerse)

---

## 📌 Overview

**QuizVerse** is an intelligent, full-stack quiz web application designed to test and enhance user knowledge across various academic and technical domains. Powered by modern web technologies, QuizVerse generates dynamic quizzes, evaluates responses in real-time, provides detailed feedback on performance, and tracks historical results for registered users.

Whether you're preparing for technical assessments, testing web development skills, or tracking academic progress, QuizVerse provides a seamless, fast, and responsive user experience.

---

## ✨ Key Features

- 🎯 **Domain-Specific Track Selection:** Choose from multiple subject tracks including Web Development, Data Science, and Custom AI Topics.
- 🔐 **Registration Verification:** Built-in registration ID validation (e.g., student/token verification) to secure test attempts.
- ⚡ **Real-Time Evaluation:** Instant scoring with detailed performance metrics upon quiz submission.
- 📊 **Results & History Board:** Revisit past attempts and review detailed breakdowns of correct and incorrect answers.
- 🎨 **Modern Responsive UI:** Dark-themed, sleek dashboard designed with React and CSS/Tailwind for mobile and desktop screens.
- 🛠️ **Full-Stack Architecture:** Decoupled architecture featuring a React frontend and Node.js/Express (or Python) backend services.

---

## 📸 Application Preview & Screenshots

### 1. Main Dashboard & Track Selection
![QuizVerse Dashboard](./frontend/public/screenshot1.png)
*Select your preferred track and enter registration credentials to start.*

### 2. Interactive Quiz View
![Active Quiz Session](./frontend/public/screenshot2.png)
*Dynamic multiple-choice quiz interface with real-time progress indicators.*

### 3. Results & Feedback Summary
![Results Board](./frontend/public/screenshot3.png)
*Detailed score review and performance analytics board.*

---

## 🛠️ Tech Stack & Tools

| Component | Technology |
| :--- | :--- |
| **Frontend Framework** | React.js (Vite) |
| **Styling** | Modern CSS Modules / TailwindCSS |
| **State Management** | React Hooks & Context API |
| **Backend API** | Node.js / Express |
| **Deployment** | Vercel (Frontend & Serverless API) |
| **Version Control** | Git & GitHub |

---

## 📁 Repository Structure

```text
QuizVerse/
├── frontend/                  # React + Vite frontend application
│   ├── src/
│   │   ├── components/        # Reusable UI components (Quiz, Results, Track selector)
│   │   ├── pages/             # Page views (Dashboard, Quiz, History)
│   │   └── App.jsx            # Main App entry point
│   ├── public/                # Static assets & screenshots
│   ├── package.json           # Frontend dependencies
│   └── vite.config.js         # Vite configuration
│
├── backend/                   # Node.js Express server / API logic
│   ├── routes/                # API routes for quizzes & validation
│   └── package.json           # Backend dependencies
│
└── README.md                  # Project documentation

