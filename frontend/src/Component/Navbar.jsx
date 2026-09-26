import "./Navbar.css";
import { FiCamera, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FiCamera />
        <span>FrameFusion</span>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#gallery">Gallery</a>
        </li>

        <li>
          <a href="#collections">Collections</a>
        </li>

        <li>
          <Link to="/favorites">Favorites</Link>
        </li>

        <li>
          <a href="#about">About</a>
        </li>
      </ul>

      {/* <div className="menu-icon">
        <FiMenu />
      </div> */}
    </nav>
  );
}

export default Navbar;