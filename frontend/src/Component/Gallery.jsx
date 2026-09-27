import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Gallery.css";
import images from "../Data/images";

function Gallery({
  category,
  favorites,
  setFavorites,
}) {
  const [approvedImages, setApprovedImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/images/approved")
      .then((res) => res.json())
      .then((data) => setApprovedImages(data))
      .catch((error) => console.log(error));
  }, []);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const uploadedImages = approvedImages.map((item) => ({
    id: item._id,
    image: `http://localhost:5000${item.imageUrl}`,
    title: item.title,
    category: item.category,
    uploaded: true,
  }));

  const allImages = [...images, ...uploadedImages];

  const filteredImages =
    category === "All"
      ? allImages
      : allImages.filter(
        (item) => item.category === category
      );

  return (
    <section id="gallery" className="gallery-section">

      <h2 className="gallery-title">
        Explore Our Gallery
      </h2>

      <div className="gallery">

        {filteredImages.map((item) => (

          <div
            className="gallery-card"
            key={item.id}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="overlay">

              <h3>{item.title}</h3>

              <p>{item.category}</p>

              <div className="card-buttons">

                <button
                  className="fav-btn"
                  onClick={() => toggleFavorite(item.id)}
                >
                  {favorites.includes(item.id)
                    ? "❤️"
                    : " ♡  "}{" "}
                  Fav
                </button>

                {item.uploaded ? (
                  <Link
                    to={`/details/${item.id}`}
                    className="about-btn"
                  >
                    View Details →
                  </Link>
                ) : (
                  <Link
                    to={`/details/${item.id}`}
                    className="about-btn"
                  >
                    View Details →
                  </Link>
                )}

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;