import { Link } from "react-router-dom";

import "./Gallery.css";
import images from "../Data/images";

function Gallery({
  category,
  favorites,
  setFavorites,
}) {

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const filteredImages =
    category === "All"
      ? images
      : images.filter(
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
  {favorites.includes(item.id) ? "❤️" : " ♡  "} Fav
</button>

<Link to={`/details/${item.id}`} className="about-btn">
  View Details →
</Link>

  </div>

</div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;