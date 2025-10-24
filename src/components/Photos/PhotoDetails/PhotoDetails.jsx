import { useParams, useNavigate } from "react-router-dom";
import "./PhotoDetails.css";

function PhotoDetails({ photos }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const photo = photos.find((p) => p.id === Number(id));

  if (!photo) return <h2>Photo Not Found 😕</h2>;

  return (
    <div className="photo-details">
      <img src={photo.url} alt={photo.title} className="photo-full" />
      <h2>{photo.title}</h2>
      <p>Album ID: {photo.albumId}</p>

      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅️ Go Back
      </button>
    </div>
  );
}

export default PhotoDetails;
