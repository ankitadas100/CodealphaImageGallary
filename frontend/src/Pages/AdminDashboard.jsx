import { Link } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  // These values will come from the backend/database later.
  const totalUsers = 0;
  const totalImages = 0;
  const pendingUploads = 0;

  const users = [];
  const uploads = [];

  return (
    <div className="admin-dashboard-page">

      <div className="admin-dashboard-container">

        {/* Header */}
        <div className="admin-dashboard-header">

          <div>
            <h1>Admin Dashboard</h1>
            <p>
              Manage FrameFusion users, images and uploads.
            </p>
          </div>

          <Link to="/" className="admin-home-btn">
            ← Gallery
          </Link>

        </div>

        {/* Stats */}
        <div className="admin-stats">

          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <h3>Total Users</h3>
            <strong>{totalUsers}</strong>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🖼️</div>
            <h3>Total Images</h3>
            <strong>{totalImages}</strong>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⏳</div>
            <h3>Pending Uploads</h3>
            <strong>{pendingUploads}</strong>
          </div>

        </div>

        {/* Users */}
        <section className="admin-section">

          <div className="section-heading">
            <div>
              <h2>User Management</h2>
              <p>View registered FrameFusion users.</p>
            </div>
          </div>

          {users.length === 0 ? (
            <div className="admin-empty">
              <span>👥</span>
              <h3>No users yet</h3>
              <p>
                Registered users will appear here.
              </p>
            </div>
          ) : (
            <div className="admin-table-wrapper">

              <table className="admin-table">

                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>

                      <td>
                        <button className="delete-btn">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          )}

        </section>

        {/* Image Management */}
        <section className="admin-section">

          <div className="section-heading">
            <div>
              <h2>Image Management</h2>
              <p>
                Manage images uploaded by FrameFusion users.
              </p>
            </div>
          </div>

          {uploads.length === 0 ? (
            <div className="admin-empty">
              <span>🖼️</span>
              <h3>No uploaded images yet</h3>
              <p>
                User uploads will appear here.
              </p>
            </div>
          ) : (
            <div className="admin-table-wrapper">

              <table className="admin-table">

                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Uploaded By</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {uploads.map((upload) => (
                    <tr key={upload.id}>
                      <td>{upload.title}</td>
                      <td>{upload.category}</td>
                      <td>{upload.uploadedBy}</td>
                      <td>{upload.status}</td>

                      <td className="table-actions">
                        <button className="approve-btn">
                          Approve
                        </button>

                        <button className="delete-btn">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          )}

        </section>

        {/* Logout */}
        <div className="admin-logout-section">
          <Link to="/admin/login" className="admin-logout-btn">
            Logout
          </Link>
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;