const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const aiRoutes = require("./routes/aiRoutes");
const quizRoutes = require("./routes/quizRoutes"); // 👈 NEW

const app = express();

app.use(cors());
app.use(express.json());

// Connect MongoDB
//connectDB(); 

// Routes
app.use("/api/users", userRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/quiz", quizRoutes); // 👈 NEW

app.get("/", (req, res) => {
  res.send("Quiz Platform Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});