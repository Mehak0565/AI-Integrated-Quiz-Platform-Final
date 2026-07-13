import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const history = JSON.parse(localStorage.getItem("history")) || [];

  const clearHistory = () => {
    localStorage.removeItem("history");
    window.location.reload();
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div
          className="card"
          style={{
            width: "700px",
            maxWidth: "95%",
          }}
        >
          <h1>Welcome to AI Quiz Platform</h1>

          <p
            style={{
              marginBottom: "25px",
              color: "#555",
            }}
          >
            Test your skills and improve your knowledge.
          </p>

          <button
            onClick={() => navigate("/interest/Computer Science")}
          >
             Start New Quiz
          </button>

          <br />
          <br />

          <h2> Quiz History</h2>

          <br />

          {history.length === 0 ? (
            <div
              style={{
                padding: "20px",
                background: "#f8fafc",
                borderRadius: "12px",
              }}
            >
              <h3>No Quiz Attempted Yet </h3>
              <p>Start your first quiz to see your history here.</p>
            </div>
          ) : (
            history.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#ffffff",
                  borderRadius: "15px",
                  padding: "18px",
                  marginBottom: "18px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  textAlign: "left",
                }}
              >
                <h3 style={{ color: "#2563eb" }}>
                  📘 {item.interest}
                </h3>

                <p>
                  <strong>Score:</strong> {item.score} / {item.totalQuestions}
                </p>

                <p>
                  <strong>Date:</strong> {item.date}
                </p>
              </div>
            ))
          )}

          <br />

          {history.length > 0 && (
            <button
              onClick={clearHistory}
              style={{
                background: "#ef4444",
              }}
            >
              🗑 Clear History
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;