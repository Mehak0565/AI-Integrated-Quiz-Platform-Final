import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav
      style={{
        background: "#ffffff",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ color: "#2563eb", margin: 0 }}>
        🤖 AI Quiz Platform
      </h2>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/dashboard">
          <button
            style={{
              width: "120px",
              margin: 0,
            }}
          >
            Dashboard
          </button>
        </Link>

        <button
          onClick={logout}
          style={{
            width: "100px",
            background: "#ef4444",
            margin: 0,
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;