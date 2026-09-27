import "./Navbar.css";
import { FiCamera, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [token]);

  return (
    <>
      <nav className="navbar">

        <div className="logo">
          <FiCamera />
          <span>FrameFusion</span>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#gallery">Gallery</a>
          </li>

          <li>
            <a href="#collections">Collections</a>
          </li>

          <li>
            <Link to="/favorites">Favorites</Link>
          </li>

          <li>
            <a href="#about">About</a>
          </li>
        </ul>

        {token ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "white",
            }}
          >
            <FiUser size={28} />

            <div>
              <div style={{ fontWeight: "600" }}>
                {user?.name}
              </div>

              <div
                style={{
                  fontSize: "13px",
                  textTransform: "capitalize",
                  opacity: "0.8",
                }}
              >
                {user?.role}
              </div>
            </div>

            <Link
              to={
                user?.role === "admin"
                  ? "/admindashboard"
                  : "/dashboard"
              }
              className="dashboard-plus"
            >
              +
            </Link>
          </div>
        ) : (
          <Link to="/login" className="login-btn">
            Login / Sign Up
          </Link>
        )}

      </nav>

      {showPopup && (
        <div className="login-overlay">

          <div className="login-popup">

            <button
              className="popup-close"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>

            <div className="popup-icon">📸</div>

            <h2>Welcome to FrameFusion</h2>

            <p>
              Login or Sign Up to explore the full experience.
            </p>

            <div className="popup-buttons">

              <Link
                to="/login"
                className="popup-login"
                onClick={() => setShowPopup(false)}
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="popup-signup"
                onClick={() => setShowPopup(false)}
              >
                Sign Up
              </Link>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default Navbar;