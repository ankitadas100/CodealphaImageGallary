import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./MyUpload.css";

function MyUploads() {
  const token = localStorage.getItem("token");

  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/images/my-uploads", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUploads(data));
  }, [token]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="my-uploads-page">
      <div className="my-uploads-container">

        <div className="my-uploads-header">
          <div>
            <h1>My Uploads</h1>
            <p>View the images you have uploaded.</p>
          </div>

          <Link to="/dashboard" className="back-dashboard-btn">
            ← Dashboard
          </Link>
        </div>

        {uploads.length === 0 ? (
          <div className="empty-upload">
            <h2>No uploads yet</h2>
            <p>Upload your first image to see it here.</p>
          </div>
        ) : (
          <div className="uploads-grid">
            {uploads.map((item) => (
              <div className="upload-card" key={item._id}>
                <img
                  src={`http://localhost:5000${item.imageUrl}`}
                  alt={item.title}
                />

                <h3>{item.title}</h3>
                <p>{item.category}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default MyUploads;