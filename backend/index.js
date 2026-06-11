import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import quizRoutes from './routes/quizroutes.js';

// Load environmental variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 🔒 FIX: Updated CORS configuration to handle port 3000 and 3001 seamlessly
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Body parser middleware
app.use(express.json());

// 🛣️ Mount your Quiz API endpoints
app.use('/api', quizRoutes);

console.log("Checking for database availability...");

// Local MongoDB fallback database connection logic
const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/quizverse";

mongoose.connect(mongoURI)
  .then(() => {
    console.log("======================================================");
    console.log("🚀 SUCCESS: MongoDB database connected successfully!");
    console.log("======================================================");
  })
  .catch((err) => {
    console.error("❌ ERROR: MongoDB local connection failure:", err.message);
  });

// Fire up the express listening loop
app.listen(PORT, () => {
  console.log(`🚀 SUCCESS: Server is running smoothly on port ${PORT}`);
});