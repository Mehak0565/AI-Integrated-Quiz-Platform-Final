import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({
    name: "",
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

  const handleSubmit = async () => {
    if (!user.name || !user.email || !user.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://ai-integrated-quiz-platform.onrender.com/api/users/signup",
        user
      );

      alert(response.data.message);

      navigate("/login");

    } catch (error) {
      console.log(error);
      alert("Signup Failed");
    }
  };

  return (
    <div className="container">
      <div className="card">

        <h1> Create Account</h1>

        <p>Register to start your AI Quiz journey.</p>

        <input
          type="text"
          name="name"
          placeholder=" Enter Name"
          value={user.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder=" Enter Email"
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

        <button onClick={handleSubmit}>
          Create Account
        </button>

        <br /><br />

        <p>Already have an account?</p>

        <Link to="/login">
          <button>
            Login
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Signup;