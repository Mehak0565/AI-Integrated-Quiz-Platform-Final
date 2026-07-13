const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ===============================
// Generate Quiz
// ===============================
router.post("/generate-quiz", async (req, res) => {
  try {
    const { interest } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
Generate 10 MCQ questions on ${interest}.

Return ONLY valid JSON in this format:

[
  {
    "question":"...",
    "options":["A","B","C","D"],
    "answer":"..."
  }
]

Do not add markdown or explanation.
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;

    let quizText = response.text();

    quizText = quizText.replace(/```json/g, "");
    quizText = quizText.replace(/```/g, "");

    const quiz = JSON.parse(quizText);

    res.json({
      success: true,
      quiz,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "AI Error",
    });
  }
});

// ===============================
// AI Result Analysis
// ===============================
router.post("/analyze-result", async (req, res) => {
  try {
    const { score, totalQuestions, interest } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
A student attempted a quiz.

Subject: ${interest}

Score: ${score}/${totalQuestions}

Analyze the performance.

Return plain text only.

Include:
1. Strength
2. Weakness
3. Topics to Improve
4. Recommendation

Keep within 120 words.
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;

    res.json({
      success: true,
      analysis: response.text(),
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "AI Analysis Error",
    });
  }
});

module.exports = router;