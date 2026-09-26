import { Link } from "react-router-dom";
import "./MyUpload.css";

function MyUploads() {
  // Temporary data for frontend testing.
  // Later this will come from the backend/database.
  const uploads = [];

  return (
    <div className="my-uploads-page">

      <div className="my-uploads-container">

        {/* Header */}
        <div className="my-uploads-header">

          <div>
            <h1>My Uploads</h1>

            <p>
              Manage the photographs you have shared on FrameFusion.
            </p>
          </div>

          <Link to="/dashboard" className="dashboard-btn">
            ← Dashboard
          </Link>

        </div>

        {/* Upload Button */}
        <div className="upload-top">
          <Link to="/upload" className="new-upload-btn">
            + Upload New Image
          </Link>
        </div>

        {/* Uploads */}
        {uploads.length === 0 ? (

          <div className="empty-uploads">

            <div className="empty-icon">🖼️</div>

            <h2>No uploads yet</h2>

            <p>
              You haven't uploaded any images yet.
              Start sharing your photography with FrameFusion.
            </p>

            <Link
              to="/upload"
              className="empty-upload-btn"
            >
              Upload Your First Image
            </Link>

          </div>

        ) : (

          <div className="uploads-grid">

            {uploads.map((item) => (

              <div
                className="upload-card"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="upload-card-content">

                  <h3>{item.title}</h3>

                  <p>{item.category}</p>

                  <div className="upload-card-actions">

                    <button className="edit-btn">
                      Edit
                    </button>

                    <button className="delete-btn">
                      Delete
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default MyUploads;