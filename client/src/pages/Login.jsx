import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    if (!user.email || !user.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://ai-integrated-quiz-platform.onrender.com/api/users/login",
        user
      );

      alert(response.data.message);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="container">
      <div className="card">

        <h1> Login</h1>

        <p>Welcome back! Login to continue.</p>

        <input
          type="email"
          name="email"
          placeholder="📧 Enter Email"
          value={user.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder=" Enter Password"
          value={user.password}
          onChange={handleChange}
        />

        <div
          style={{
            textAlign: "right",
            marginTop: "8px",
            marginBottom: "15px",
          }}
        >
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              width: "auto",
              padding: "6px 12px",
              fontSize: "14px",
            }}
          >
            {showPassword ? " Hide" : "👁 Show"}
          </button>
        </div>

        <button onClick={handleLogin}>
          Login
        </button>

        <br /><br />

        <p>
          Don't have an account?
        </p>

        <Link to="/signup">
          <button>
            Create Account
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Login;