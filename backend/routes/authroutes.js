import express from 'express';
const router = express.Router();

router.post('/login', (req, res) => {
  res.json({ message: "Authentication module ready." });
});

export default router;