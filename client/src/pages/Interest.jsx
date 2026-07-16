import { useParams, useNavigate } from "react-router-dom";

function Interest() {
  const { stream } = useParams();
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz", {
      state: {
        interest: stream,
      },
    });
  };

  return (
    <div className="container">
      <div className="card">
        <h2>{stream} Quiz</h2>
        <p>Select your topic and start the quiz.</p>

        <button onClick={startQuiz}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Interest;