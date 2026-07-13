const mongoose = require("mongoose");

const quizAttemptSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },

    interest: {
      type: String,
      required: true,
    },

    score: {
      type: Number,
      required: true,
    },

    totalQuestions: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("QuizAttempt", quizAttemptSchema);