import express from 'express';
import { QuizResult } from '../models/QuizResult.js';

const router = express.Router();

// 1. Verify Student Admission Eligibility Check
router.post('/check-eligibility', async (req, res) => {
  const { registrationNo } = req.body;
  
  if (!registrationNo) {
    return res.status(400).json({ message: "❌ Registration number is required." });
  }

  const cleanRegNo = registrationNo.trim().toLowerCase();

  // Strict Validation: Must explicitly begin with '24pwbcs' token prefix
  if (!cleanRegNo.startsWith('24pwbcs')) {
    return res.status(400).json({ 
      message: "❌ INVALID FORMAT:\nRegistration number must explicitly begin with '24pwbcs' prefix token values." 
    });
  }

  try {
    // Block access if they have already passed a quiz entry in historical logs
    const existingPass = await QuizResult.findOne({ registrationNo: cleanRegNo, status: "PASS" });
    if (existingPass) {
      return res.status(400).json({ 
        message: "❌ ACCESS DENIED:\nYou have already cleared an evaluation assessment in our records." 
      });
    }

    res.json({ eligible: true, message: "Access permitted. Prepare for exam engine load." });
  } catch (error) {
    res.status(500).json({ message: "Server eligibility verification failure." });
  }
});

// 2. Write Finished Quiz Parameters to DB
router.post('/submit-results', async (req, res) => {
  const { registrationNo, subject, marksObtained, status } = req.body;

  try {
    const newResult = new QuizResult({
      registrationNo: registrationNo.trim().toLowerCase(),
      subject,
      marksObtained,
      status
    });
    await newResult.save();
    res.status(201).json({ success: true, message: "Metrics recorded safely inside MongoDB cluster pools." });
  } catch (error) {
    res.status(500).json({ error: "Failed to write document parameters." });
  }
});

// 3. Collect History Arrays 
router.get('/results-history', async (req, res) => {
  try {
    const history = await QuizResult.find().sort({ timestamp: -1 });
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: "Failed to read database workspace logs." });
  }
});

// 4. Drop Collection List
router.delete('/clear-history', async (req, res) => {
  try {
    await QuizResult.deleteMany({});
    res.json({ message: "Database arrays dropped." });
  } catch (error) {
    res.status(500).json({ error: "Database pipeline flush failure." });
  }
});

export default router;