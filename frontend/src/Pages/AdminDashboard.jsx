import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [images, setImages] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (user?.role !== "admin") return;

    fetch("http://localhost:5000/api/auth/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));

    fetch("http://localhost:5000/api/images/all")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  if (user?.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  const totalUsers = users.length;
  const totalImages = images.length;
  const pendingUploads = images.filter(
    (image) => image.status !== "approved"
  ).length;

  const handleDelete = async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/auth/users/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    alert(data.message);

    if (response.ok) {
      setUsers((prev) =>
        prev.filter((user) => user._id !== id)
      );
    }
  };
  const handleApprove = async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/images/approve/${id}`,
      { method: "PATCH" }
    );

    const data = await response.json();
    alert(data.message);

    if (response.ok) {
      setImages((prev) =>
        prev.map((image) =>
          image._id === id
            ? { ...image, status: "approved" }
            : image
        )
      );
    }
  };

  const handleReject = async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/images/reject/${id}`,
      { method: "PATCH" }
    );

    const data = await response.json();
    alert(data.message);

    if (response.ok) {
      setImages((prev) =>
        prev.filter((image) => image._id !== id)
      );
    }
  };

  return (
    <div className="admin-dashboard-page">
      <div className="admin-dashboard-container">

        <div className="admin-dashboard-header">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage FrameFusion users and images.</p>
          </div>

          <Link to="/" className="admin-back-home-btn">
            ← Home
          </Link>
        </div>

        <div className="admin-stats">

          <div className="admin-stat-card">
            <div className="admin-stat-icon">👥</div>
            <h3>Total Users</h3>
            <p>{totalUsers}</p>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon">🖼️</div>
            <h3>Total Images</h3>
            <p>{totalImages}</p>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon">⏳</div>
            <h3>Pending Uploads</h3>
            <p>{pendingUploads}</p>
          </div>

        </div>

        <div className="admin-section">
          <h2>User Management</h2>

          {users.length === 0 ? (
            <p>No users found.</p>
          ) : (
            <div className="admin-list">

              {users.map((user) => (
                <div className="admin-list-item" key={user._id}>

                  <div>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <span>{user.role}</span>
                  </div>

                  <button
                    className="admin-delete-btn"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>

                </div>
              ))}

            </div>
          )}
        </div>

        <div className="admin-section">
          <h2>Image Management</h2>

          {images.length === 0 ? (
            <div className="admin-empty-state">
              <p>No uploaded images available yet.</p>
            </div>
          ) : (
            <div className="admin-list">

              {images.map((image) => (
                <div className="admin-list-item" key={image._id}>

                  <div>
                    <h3>{image.title}</h3>
                    <p>{image.category}</p>
                    <span>
                      Uploaded by: {image.uploadedBy?.name}
                    </span>
                  </div>
                  {image.status === "pending" && (
                    <>
                      <button onClick={() => handleApprove(image._id)}>
                        Approve
                      </button>

                      <button onClick={() => handleReject(image._id)}>
                        Reject
                      </button>
                    </>
                  )}

                </div>
              ))}

            </div>
          )}

        </div>

       <Link
  to="/"
  className="admin-logout-btn"
  onClick={() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }}
>
  Logout
</Link>

      </div>
    </div>
  );
}

export default AdminDashboard;