import GalleryCards from "./GalleryCard/GalleryCards";
import { NavLink } from "react-router-dom";
import "./PhotoGallery.css";

function PhotoGallery() {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">🖼️ Photo Gallery</h1>
      <div className="gallery-grid">
        <GalleryCards />
      </div>
      <div className="home-buttons">
        <NavLink to="/" className="home-btn">
          Go Home
        </NavLink>
      </div>
    </div>
  );
}

export default PhotoGallery;
