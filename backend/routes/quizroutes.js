import express from 'express';
import { QuizResult } from '../models/QuizResult.js';
import questionsModule from '../questionsData.js';

const router = express.Router();

// 1. GET DYNAMIC QUESTIONS BY SUBJECT (🎯 Subject matching fix)
router.get('/questions', async (req, res) => {
  try {
    // Frontend se subject query parameter read karna (e.g., /api/questions?subject=Python)
    const requestedSubject = req.query.subject || "Web Development";
    
    let rawQuestions = [];
    
    // 📂 Checking questionsData structure based on your dynamic exports
    if (questionsModule && typeof questionsModule === 'object') {
      // Spaces aur capitalization fix karne ke liye formatting matrix
      const formattedKey = requestedSubject.replace(/\s+/g, ''); // "Web Development" -> "WebDevelopment"
      
      if (Array.isArray(questionsModule[formattedKey])) {
        rawQuestions = questionsModule[formattedKey];
      } else if (Array.isArray(questionsModule[`${formattedKey}Questions`])) {
        rawQuestions = questionsModule[`${formattedKey}Questions`];
      } else if (Array.isArray(questionsModule[requestedSubject])) {
        rawQuestions = questionsModule[requestedSubject];
      } else if (Array.isArray(questionsModule.questions)) {
        rawQuestions = questionsModule.questions;
      } else {
        // Fallback: Agar exact match na mile toh database ki pehli available key utha le
        const firstKey = Object.keys(questionsModule)[0];
        if (firstKey && Array.isArray(questionsModule[firstKey])) {
          rawQuestions = questionsModule[firstKey];
        }
      }
    } else if (Array.isArray(questionsModule)) {
      rawQuestions = questionsModule;
    }

    if (rawQuestions && rawQuestions.length > 0) {
      const normalizedQuestions = rawQuestions.map(q => {
        const pureAnswer = (q.answer || q.correctOption || q.correctAnswer || "").toString().trim();
        const structuralOptions = Array.isArray(q.options) ? q.options.map(o => o.toString().trim()) : [];
        return {
          id: q.id,
          questionText: q.questionText || q.question || "",
          question: q.question || q.questionText || "",
          options: structuralOptions,
          answer: pureAnswer,
          correctOption: pureAnswer,
          correctAnswer: pureAnswer
        };
      });
      return res.json(normalizedQuestions);
    }
    
    // Clean safe default check if no array matches
    return res.json([]);
  } catch (error) {
    console.error("🚨 QUESTIONS FETCH ERROR:", error);
    res.status(500).json({ error: "Failed to read dynamic subject questions." });
  }
});

// 2. Student Eligibility Check
router.post('/check-eligibility', async (req, res) => {
  res.json({ eligible: true });
});

// 3. SUBMIT RESULTS
router.post('/submit-results', async (req, res) => {
  try {
    const { 
      registrationNo, studentReferenceId, studentReferenceID, studentId,
      subject, testedAreaTopic, topic,
      marksObtained, marksSecured, score,
      status, finalResultStatus 
    } = req.body;

    const resolvedID = registrationNo || studentReferenceId || studentReferenceID || studentId || "UNKNOWN_USER";
    const resolvedSubject = subject || testedAreaTopic || topic || "Web Development";
    
    let resolvedMarks = 0;
    const rawScore = marksObtained !== undefined ? marksObtained : (marksSecured !== undefined ? marksSecured : score);
    
    if (rawScore !== undefined && rawScore !== null) {
      if (rawScore.toString().includes('/')) {
        resolvedMarks = parseInt(rawScore.toString().split('/')[0].trim(), 10);
      } else {
        resolvedMarks = Number(rawScore);
      }
    }

    const resolvedStatus = status || finalResultStatus || "PASS";

    const newResult = new QuizResult({
      registrationNo: resolvedID.toString().trim().toUpperCase(),
      subject: resolvedSubject,
      marksObtained: isNaN(resolvedMarks) ? 0 : resolvedMarks,
      status: resolvedStatus.toString().toUpperCase()
    });

    const savedData = await newResult.save();
    res.status(201).json({ success: true, message: "Data saved successfully!", data: savedData });
  } catch (error) {
    res.status(500).json({ error: "Database transaction failure." });
  }
});

// 4. GET RESULTS HISTORY
router.get('/results-history', async (req, res) => {
  try {
    const historyData = await QuizResult.find().sort({ createdAt: -1 });
    
    const mappedHistory = historyData.map(item => {
      const actualScore = item.marksObtained !== undefined ? item.marksObtained : 0;
      const databaseDate = item.createdAt || item.updatedAt || new Date();
      
      const localTimeString = new Date(databaseDate).toLocaleString('en-US', {
        timeZone: 'Asia/Karachi',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      });

      return {
        _id: item._id,
        id: item._id,
        registrationNo: item.registrationNo || "STUDENT ID",
        studentReferenceId: item.registrationNo || "STUDENT ID",
        studentReferenceID: item.registrationNo || "STUDENT ID",
        studentId: item.registrationNo || "STUDENT ID",
        
        subject: item.subject || "GENERAL SUBJECT",
        testedAreaTopic: item.subject || "GENERAL SUBJECT",
        topic: item.subject || "GENERAL SUBJECT",
        
        marksObtained: actualScore,
        marksSecured: actualScore, 
        score: actualScore,
        
        status: item.status || "PASS",
        finalResultStatus: item.status || "PASS",
        
        createdAt: localTimeString,
        date: localTimeString,
        timestamp: localTimeString,
        Timestamp: localTimeString
      };
    });

    res.json(mappedHistory);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch dashboard history logs." });
  }
});

// 5. Clear History
router.delete('/clear-history', async (req, res) => {
  try {
    await QuizResult.deleteMany({});
    res.json({ message: "Database arrays dropped." });
  } catch (error) {
    res.status(500).json({ error: "Pipeline failure." });
  }
});

export default router;