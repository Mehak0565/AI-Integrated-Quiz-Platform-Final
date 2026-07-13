import Quiz from "./pages/Quiz";
import Dashboard from "./pages/Dashboard";
import Interest from "./pages/Interest";
import Login from "./pages/Login";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
//import "./App.css";

function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1>Quiz Platform</h1>
        <p>Welcome to Quiz Platform</p>

        <Link to="/signup">
          <button>Signup</button>
        </Link>

        <Link to="/login">
  <button>Login</button>
</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} />
<Route path="/interest/:stream" element={<Interest />} />
<Route path="/quiz" element={<Quiz />} />
</Routes>
  );
}

export default App;