import "./Imagedetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import images from "../Data/images";

function ImageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [uploadedImage, setUploadedImage] = useState(null);

 
  const image = images.find((item) => item.id === Number(id));

  
  useEffect(() => {
    if (!image) {
      fetch(`http://localhost:5000/api/images/${id}`)
        .then((res) => res.json())
        .then((data) => setUploadedImage(data))
        .catch((error) => console.log(error));
    }
  }, [id, image]);

  if (!image && !uploadedImage) {
    return <h2>Loading...</h2>;
  }

  const displayImage = image
    ? image.image
    : `http://localhost:5000${uploadedImage.imageUrl}`;

  const displayTitle = image
    ? image.title
    : uploadedImage.title;

  const displayCategory = image
    ? image.category
    : uploadedImage.category;

  return (
    <div className="details-container">

      <div className="details-image">
        <img
          src={displayImage}
          alt={displayTitle}
        />
      </div>

      <div className="details-content">

        <h1>{displayTitle}</h1>

        <span className="category">
          {displayCategory}
        </span>

       
        {uploadedImage && !image && (
          <>
            <h2>📷 About This Image</h2>
            <p>{uploadedImage.description}</p>

            <h2>📂 Category</h2>
            <p>{uploadedImage.category}</p>

            <h2>👤 Uploaded By</h2>
            <p>{uploadedImage.uploadedBy?.name}</p>
          </>
        )}

    
        {image?.category === "Nature" && (
          <>
            <h2>🌿 About This View</h2>
            <p>{image.about}</p>

            <h2>📍 Similar Places in India</h2>
            <ul>
              {image.similarIndia.map((place, index) => (
                <li key={index}>{place}</li>
              ))}
            </ul>

            <h2>🌍 Similar Places Around the World</h2>
            <ul>
              {image.similarWorld.map((place, index) => (
                <li key={index}>{place}</li>
              ))}
            </ul>

            <h2>📅 Best Time to Visit</h2>
            <p>{image.bestTime}</p>

            <h2>🎒 Activities</h2>
            <ul>
              {image.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </>
        )}

      
        {image?.category === "Travel" && (
          <>
            <h2>✈️ About This Destination</h2>
            <p>{image.about}</p>

            <h2>⭐ Famous For</h2>
            <ul>
              {image.famousFor.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2>📍 Similar Places in India</h2>
            <ul>
              {image.similarIndia.map((place, index) => (
                <li key={index}>{place}</li>
              ))}
            </ul>

            <h2>🌍 Similar Places Around the World</h2>
            <ul>
              {image.similarWorld.map((place, index) => (
                <li key={index}>{place}</li>
              ))}
            </ul>

            <h2>📅 Best Time to Visit</h2>
            <p>{image.bestTime}</p>

            <h2>🎒 Things To Do</h2>
            <ul>
              {image.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>

            <h2>💡 Travel Tips</h2>
            <ul>
              {image.travelTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </>
        )}


        {image?.category === "Food" && (
          <>
            <h2>🍛 About This Dish</h2>
            <p>{image.about}</p>

            <h2>📍 Famous In</h2>
            <ul>
              {image.famousIn.map((place, index) => (
                <li key={index}>{place}</li>
              ))}
            </ul>

            <h2>🥘 Main Ingredients</h2>
            <ul>
              {image.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <h2>👨‍🍳 How It's Made</h2>
            <p>{image.howToMake}</p>

            <h2>🍽 Best Served With</h2>
            <ul>
              {image.bestServedWith.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2>⭐ Interesting Fact</h2>
            <p>{image.interestingFact}</p>

            <h2>🌶️ Spice Level</h2>
            <p>{image.spiceLevel}</p>
          </>
        )}

       
        {image?.category === "Wildlife" && (
          <>
            <h2>🐾 About This Animal</h2>
            <p>{image.about}</p>

            <h2>🌍 Found In</h2>
            <ul>
              {image.foundIn.map((place, index) => (
                <li key={index}>{place}</li>
              ))}
            </ul>

            <h2>🍖 Diet</h2>
            <p>{image.diet}</p>

            <h2>🏞 Habitat</h2>
            <p>{image.habitat}</p>

            <h2>⏳ Lifespan</h2>
            <p>{image.lifespan}</p>

            <h2>⭐ Interesting Fact</h2>
            <p>{image.interestingFact}</p>
          </>
        )}

        {/* City */}
        {image?.category === "City" && (
          <>
            <h2>🏙 About This City</h2>
            <p>{image.about}</p>

            <h2>⭐ Famous For</h2>
            <ul>
              {image.famousFor.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2>📍 Similar Cities</h2>
            <ul>
              {image.similarCities.map((city, index) => (
                <li key={index}>{city}</li>
              ))}
            </ul>

            <h2>🎯 Popular Attractions</h2>
            <ul>
              {image.attractions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2>🍜 Local Food</h2>
            <ul>
              {image.localFood.map((food, index) => (
                <li key={index}>{food}</li>
              ))}
            </ul>

            <h2>📅 Best Time to Visit</h2>
            <p>{image.bestTime}</p>
          </>
        )}

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          ← Back to Gallery
        </button>

      </div>
    </div>
  );
}

export default ImageDetails;