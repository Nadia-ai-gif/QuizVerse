import mongoose from 'mongoose';
const QuestionSchema = new mongoose.Schema({
    category: { type: String, required: true },
    questionText: { type: String, required: true },
    options: { type: [String], required: true },
    correctAnswer: { type: String, required: true }
}, { timestamps: true });
export const Question = mongoose.models.Question || mongoose.model('Question', QuestionSchema);