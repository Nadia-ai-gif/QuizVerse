const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Paste your routes and quiz logic here:
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running live on Vercel!' });
});

// Add your existing quiz endpoints here...
// app.get('/api/quizzes', ...);

// IMPORTANT: Export app instead of calling app.listen()
module.exports = app;
