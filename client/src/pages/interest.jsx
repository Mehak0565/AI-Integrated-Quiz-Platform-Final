import { useParams, useNavigate } from "react-router-dom";

function Interest() {
  const { stream } = useParams();
  const navigate = useNavigate();

  const goToQuiz = (interest) => {
    // Save selected interest
    localStorage.setItem("interest", interest);

    navigate("/quiz", {
      state: {
        interest,
      },
    });
  };

  return (
    <div className="container">
      <div className="card">

        <h1>{stream} Stream</h1>

        <h2>Select Your Interest</h2>

        <br />

        <button onClick={() => goToQuiz("Java")}>
          Java
        </button>

        <br /><br />

        <button onClick={() => goToQuiz("Python")}>
          Python
        </button>

        <br /><br />

        <button onClick={() => goToQuiz("DBMS")}>
          DBMS
        </button>

        <br /><br />

        <button onClick={() => goToQuiz("Web Development")}>
          Web Development
        </button>

        <br /><br />

        <button onClick={() => goToQuiz("C Programming")}>
          C Programming
        </button>

      </div>
    </div>
  );
}

export default Interest;