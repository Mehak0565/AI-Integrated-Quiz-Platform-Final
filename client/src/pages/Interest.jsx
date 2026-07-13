import { useParams } from "react-router-dom";

function Interest() {
  const { stream } = useParams();

  return (
    <div className="container">
      <h2>{stream} Quiz</h2>
      <p>Select your topic and start the quiz.</p>
    </div>
  );
}

export default Interest;