const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    regNumber: { type: String, required: true },
    subject: { type: String, required: true },
    score: { type: Number, required: true },
    totalQuestions: { type: Number, required: true },
    date: { type: Date, default: Date.now }
}, { collection: 'registrations' });

module.exports = mongoose.model('Registration', registrationSchema);