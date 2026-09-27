import { useEffect, useState } from "react";
import images from "../Data/images";
import "./Fav.css";
import { Link } from "react-router-dom";

function Fav({ favorites }) {
  const [uploadedImages, setUploadedImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/images/approved")
      .then((res) => res.json())
      .then((data) => setUploadedImages(data));
  }, []);

  const backendImages = uploadedImages.map((item) => ({
    id: item._id,
    image: `http://localhost:5000${item.imageUrl}`,
    title: item.title,
    category: item.category,
  }));

  const allImages = [...images, ...backendImages];

  const favoriteImages = allImages.filter((item) =>
    favorites.includes(item.id)
  );

  return (
    <section className="fav-section">
      <h2 className="fav-title">❤️ My Favorite Images</h2>

      <div className="back-btn-container">
        <Link to="/" className="back-btn">
          ← Back to Gallery
        </Link>
      </div>

      {favoriteImages.length === 0 ? (
        <p>No favorite images yet</p>
      ) : (
        <div className="gallery">
          {favoriteImages.map((item) => (
            <div className="gallery-card" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="overlay">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Fav;