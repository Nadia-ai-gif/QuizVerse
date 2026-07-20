# 🌌 QuizVerse

> **Live Application URL:** [https://your-quizverse-app.vercel.app](https://your-quizverse-app.vercel.app)  
> **GitHub Repository:** [https://github.com/Nadia-ai-gif/QuizVerse](https://github.com/Nadia-ai-gif/QuizVerse)

---

## 📌 Problem Statement & Target Audience

### The Problem
Students and lifelong learners often struggle to retain dense study materials, lecture notes, and textbook content. Traditional flashcards and static study tools require manual card creation, which is time-consuming, while general online quizzes often fail to provide detailed, step-by-step explanations for *why* an answer is right or wrong.

### Target Audience
Students, exam candidates, and self-learners looking for an active recall tool that instantly generates custom assessments from their study materials.

### The Solution
**QuizVerse** is an interactive, AI-powered assessment platform that transforms user study notes, topics, or custom parameters into dynamic quizzes. Rather than simple trivia, QuizVerse evaluates user responses in real-time, providing targeted explanations to ensure true concept mastery.

---

## ✨ Key Features

- ⚡ **Instant Quiz Generation:** Generate custom quizzes on any subject, tailored to selected difficulty levels and topic focus areas.
- 🤖 **AI Explanations & Active Recall:** Receive detailed feedback on every question, explaining why an answer is correct and breaking down common pitfalls for incorrect choices.
- 📊 **Progress & Performance Tracking:** Track quiz scores, accuracy percentages, and performance over time.
- 🎨 **Interactive UI:** Smooth navigation, real-time scoring, and instant review dashboards.

---

## 🧠 AI Feature & System Instructions

### How the AI Works
QuizVerse uses an internal API route to connect to the LLM API. The system enforces strict output structures using custom prompts to output valid JSON for seamless frontend rendering.

### 📜 System Instructions / Prompt Engine
```text
You are an expert tutor and assessment generator for QuizVerse, an educational active-recall platform.

