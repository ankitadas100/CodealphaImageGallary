import { Link, Navigate } from "react-router-dom";
import "./UserDashboard.css";

function UserDashboard() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const user = JSON.parse(localStorage.getItem("user"));

  const userName = user?.name || "User";
  const userEmail = user?.email || "Your email";
  const firstLetter = userName.charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">

        <div className="dashboard-header">
          <div>
            <h1>Welcome back, {userName} 👋</h1>
            <p>
              Explore, save and share your favorite moments on FrameFusion.
            </p>
          </div>

          <Link to="/" className="back-home-btn">
            ← Back to Gallery
          </Link>
        </div>

        <div className="profile-card">
          <div className="profile-avatar">{firstLetter}</div>

          <div className="profile-info">
            <h2>{userName}</h2>
            <p>{userEmail}</p>
            <span>FrameFusion Member</span>
          </div>
        </div>

        <div className="dashboard-grid">

          <Link to="/favorites" className="dashboard-card">
            <div className="dashboard-icon">❤️</div>
            <h3>My Favorites</h3>
            <p>
              View the images you have saved to your favorites.
            </p>
          </Link>

          <Link to="/upload" className="dashboard-card">
            <div className="dashboard-icon">📷</div>
            <h3>Upload Image</h3>
            <p>
              Share your own photography with the FrameFusion community.
            </p>
          </Link>

          <Link to="/my-uploads" className="dashboard-card">
            <div className="dashboard-icon">🖼️</div>
            <h3>My Uploads</h3>
            <p>
              View and manage the images you have uploaded.
            </p>
          </Link>

          <Link
           to="/" 
            className="dashboard-card"
            onClick={handleLogout}
          >
            <div className="dashboard-icon">🚪</div>
            <h3>Logout</h3>
            <p>
              Sign out from your FrameFusion account.
            </p>
          </Link>

        </div>

        <div className="activity-section">
          <h2>Recent Activity</h2>

          <div className="activity-list">

            <div className="activity-item">
              <span>❤️</span>
              <p>Your favorite activity will appear here.</p>
              <small>---</small>
            </div>

            <div className="activity-item">
              <span>📷</span>
              <p>Your uploaded images will appear here.</p>
              <small>---</small>
            </div>

            <div className="activity-item">
              <span>👀</span>
              <p>Your recent gallery activity will appear here.</p>
              <small>---</small>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default UserDashboard;