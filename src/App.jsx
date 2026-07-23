import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Gallery from "./Component/Gallery";
import Fav from "./Component/Fav"; 

import Collection from "./Pages/Collection";
import Imagedetails from "./Pages/Imagedetails";
import Footer from "./Component/Footer";

function Home({
  category,
  setCategory,
  favorites,
  setFavorites,
}) {
  return (
    <>
      <Navbar />
      <Hero />

      <Collection
        category={category}
        setCategory={setCategory}
      />

      <Gallery
        category={category}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </>
  );
}

function App() {
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              category={category}
              setCategory={setCategory}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />

        <Route
          path="/details/:id"
          element={<Imagedetails />}
        />

        <Route
          path="/favorites"
          element={<Fav favorites={favorites} />}
        />
         
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;