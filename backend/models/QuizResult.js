import mongoose from 'mongoose';

const quizResultSchema = new mongoose.Schema({
  registrationNo: { type: String, required: true },
  subject: { type: String, required: true },
  marksObtained: { type: String, required: true },
  status: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

export const QuizResult = mongoose.model('QuizResult', quizResultSchema);