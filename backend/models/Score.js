const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    studentId: { type: String, required: true },
    topic: { type: String, required: true },
    marksSecured: { type: Number, required: true },
    totalMarks: { type: Number, required: true, default: 20 },
    status: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Score', scoreSchema);