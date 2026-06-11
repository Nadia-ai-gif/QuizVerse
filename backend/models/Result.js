import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
  registrationNo: { type: String, required: true },
  subject: { type: String, required: true },
  marksObtained: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Result', resultSchema);