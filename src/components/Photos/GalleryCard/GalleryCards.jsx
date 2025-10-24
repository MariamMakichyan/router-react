import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


function GalleryCards() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=50")
      .then(res => res.json())
      .then(data => setPhotos(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      {photos.map((photo) => (
        <NavLink
          key={photo.id}
          to={`/photos/${photo.id}`}
          className="gallery-card"
        >
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <div className="gallery-card-title">{photo.title}</div>
        </NavLink>
      ))}
    </>
  );
}

export default GalleryCards;