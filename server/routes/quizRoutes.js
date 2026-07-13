const express = require("express");
const QuizAttempt = require("../models/QuizAttempt");

const router = express.Router();

// Save Quiz Attempt
router.post("/save", async (req, res) => {
  try {
    const { userEmail, interest, score, totalQuestions } = req.body;

    const attempt = new QuizAttempt({
      userEmail,
      interest,
      score,
      totalQuestions,
    });

    await attempt.save();

    res.json({
      success: true,
      message: "Quiz Attempt Saved Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Error Saving Quiz Attempt",
    });
  }
});

module.exports = router;