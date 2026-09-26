import { Link } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
  return (
    <div className="admin-login-page">

      <div className="admin-login-card">

        <h1>Admin Login</h1>

        <p>Login to manage FrameFusion</p>

        <form>

          <div className="form-group">
            <label>Admin Email</label>
            <input
              type="email"
              placeholder="Enter admin email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter admin password"
            />
          </div>

          <button
            type="submit"
            className="admin-login-btn"
          >
            Admin Login
          </button>

        </form>

        <p className="user-login-text">
          Are you a user?{" "}
          <Link to="/login">User Login</Link>
        </p>

      </div>

    </div>
  );
}

export default AdminLogin;