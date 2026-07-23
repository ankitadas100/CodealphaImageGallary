import "./Collection.css";

function Collection({ category, setCategory }) {
  return (
    <section id="collections" className="collection">

      <div className="collection-content">
        <h2 className="collection-title">Latest Collections</h2>

        <p className="collection-text">
          Explore stunning photography from different categories. Click a
          category below to discover beautiful moments captured through the
          lens.
        </p>

        <div className="category-buttons">

          <button
            className={category === "All" ? "active" : ""}
            onClick={() => setCategory("All")}
          >
            All
          </button>

          <button
            className={category === "Nature" ? "active" : ""}
            onClick={() => setCategory("Nature")}
          >
            Nature
          </button>

          <button
            className={category === "Travel" ? "active" : ""}
            onClick={() => setCategory("Travel")}
          >
            Travel
          </button>

          <button
            className={category === "Food" ? "active" : ""}
            onClick={() => setCategory("Food")}
          >
            Food
          </button>

          <button
            className={category === "Wildlife" ? "active" : ""}
            onClick={() => setCategory("Wildlife")}
          >
            Wildlife
          </button>

          <button
            className={category === "City" ? "active" : ""}
            onClick={() => setCategory("City")}
          >
            City
          </button>

        </div>

      </div>

    </section>
  );
}

export default Collection;