import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import quizRoutes from './routes/quizroutes.js';

dotenv.config();

const app = express();

// 🔒 Universal Access Policy Matrix
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());

// Main Root Link API check
app.get('/', (req, res) => {
  res.send("🚀 QuizVerse Backend is Live and Operational!");
});

// Syncing your custom routes
app.use('/api', quizRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/QuizVerse';

// ⚡ Non-blocking server initialization structure
app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🚀 BACKEND OPERATIONAL: Running on Port ${PORT}`);
  console.log(`===============================================`);
});

// Background connection pipeline configuration
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("🟢 MONGO DB SUCCESS: Connected to  MongoDB Compass!");
  })
  .catch((err) => {
    console.error("🚨 DATABASE FAILURE LOG:", err.message);
  });