import { useState } from "react";
import { Link } from "react-router-dom";
import "./UploadImage.css";

function UploadImage() {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Image upload feature will be connected to the backend soon.");
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

          <form onSubmit={handleSubmit}>

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

                  <p>
                    Upload a JPG, JPEG or PNG image.
                  </p>
                </>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            <div className="form-group">
              <label>Image Title</label>

              <input
                type="text"
                placeholder="Enter image title"
                required
              />
            </div>

            <div className="form-group">
              <label>Category</label>

              <select required defaultValue="">
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
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label>Location</label>

              <input
                type="text"
                placeholder="Enter location"
              />
            </div>

            <button type="submit" className="upload-btn">
              Upload Image
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default UploadImage;