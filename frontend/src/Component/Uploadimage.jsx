import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./UploadImage.css";

function UploadImage() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      formData.append("image", image);
      formData.append("title", title);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("location", location);

      const response = await fetch(
        "http://localhost:5000/api/images/upload",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await response.json();

      alert(data.message);
    } catch (error) {
      alert("Upload error: " + error.message);
    }
  };

  return (
    <div className="upload-page">
      <div className="upload-container">

        <div className="upload-header">
          <div>
            <h1>Upload Your Image</h1>
            <p>Share your photography with the FrameFusion community.</p>
          </div>

          <Link to="/dashboard" className="back-dashboard-btn">
            ← Dashboard
          </Link>
        </div>

        <div className="upload-card">

          <form onSubmit={(e) => e.preventDefault()}>

            <div className="image-upload-box">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="image-preview"
                />
              ) : (
                <>
                  <div className="upload-icon">📷</div>
                  <h3>Choose an Image</h3>
                  <p>Upload a JPG, JPEG or PNG image.</p>
                </>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Image Title</label>

              <input
                type="text"
                placeholder="Enter image title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Category</label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select category
                </option>

                <option value="Nature">Nature</option>
                <option value="Travel">Travel</option>
                <option value="Food">Food</option>
                <option value="Wildlife">Wildlife</option>
                <option value="City">City</option>
              </select>
            </div>

            <div className="form-group">
              <label>Description</label>

              <textarea
                placeholder="Write something about your image..."
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label>Location</label>

              <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="upload-btn"
              onClick={handleSubmit}
            >
              Upload Image
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default UploadImage;