import "./Footer.css";
import { FiCamera, FiMail, FiInstagram, FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <footer id="about" className="footer">

      <div className="footer-logo">
        <FiCamera />
        <h2>FrameFusion</h2>
      </div>

      <p className="footer-text">
        Capture moments. Preserve memories. Explore the beauty of photography.
      </p>

      <div className="footer-icons">
        <a href="#"><FiInstagram /></a>
        <a href="#"><FiGithub /></a>
        <a href="#"><FiMail /></a>
      </div>

      <hr />

      <p className="copyright">
        © 2026 FrameFusion | Designed by Ankita Das
      </p>

    </footer>
  );
}

export default Footer;