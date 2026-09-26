import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";

import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Gallery from "./Component/Gallery";
import Fav from "./Component/Fav";

import Collection from "./Pages/Collection";
import Signup from "./Pages/Signup";
import AdminLogin from "./Pages/AdminLogin";
import Imagedetails from "./Pages/Imagedetails";
import Footer from "./Component/Footer";
import UserDashboard from "./Component/UserDashboard";
import UploadImage from "./Component/Uploadimage";
import MyUploads from "./Component/MyUploads";
import AdminDashboard from "./Pages/AdminDashboard";
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
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/adminlogin"
          element={<AdminLogin />}
        />
        <Route
          path="/dashboard"
          element={<UserDashboard />}
        />

        <Route
          path="/upload"
          element={<UploadImage />}
        />
        <Route
          path="/my-uploads"
          element={<MyUploads />}
        />
        <Route
  path="/admindashboard"
  element={<AdminDashboard />}
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