import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Result from "./Result";

function Quiz() {
  const location = useLocation();
  const interest = location.state?.interest || "Java";

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await axios.post(
          "https://ai-integrated-quiz-platform.onrender.com/api/ai/generate-quiz",
          {
            interest,
          }
        );

        setQuestions(res.data.quiz);
        localStorage.setItem("interest", interest);
      } catch (error) {
        console.log(error);
        alert("Failed to load AI Quiz");
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [interest]);

  const nextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedAnswer("");

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  if (loading) {
    return (
      <div className="container">
        <div className="card">
          <h2>Questions for your preffered stream are loading.......</h2>
        </div>
      </div>
    );
  }

  if (quizFinished) {
    return (
      <Result
        score={score}
        totalQuestions={questions.length}
      />
    );
  }

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="container">
      <div className="card">

        <h2>{interest} Quiz</h2>

        <p>
          Question {currentQuestion + 1} of {questions.length}
        </p>

        <div
          style={{
            width: "100%",
            height: "10px",
            background: "#dbeafe",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "#3b82f6",
              borderRadius: "10px",
              transition: "0.4s",
            }}
          ></div>
        </div>

        <h3>{questions[currentQuestion].question}</h3>

        <br />

        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedAnswer(option)}
            style={{
              width: "100%",
              marginBottom: "12px",
              background:
                selectedAnswer === option
                  ? "#22c55e"
                  : "#60a5fa",
            }}
          >
            {option}
          </button>
        ))}

        <br />

        <button
          onClick={nextQuestion}
          disabled={!selectedAnswer}
          style={{
            background: "#2563eb",
            opacity: selectedAnswer ? 1 : 0.6,
          }}
        >
          {currentQuestion === questions.length - 1
            ? "Finish Quiz "
            : "Next →"}
        </button>

      </div>
    </div>
  );
}

export default Quiz;