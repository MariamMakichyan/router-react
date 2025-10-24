import CommentsCards from "./Comments-card/Comments-cards";
import "./Comments.css";
import { NavLink } from "react-router-dom";

function Comments() {
  return (
    <div className="comments-container">
      <h1 className="page-title">💬 Comments</h1>

      <div className="comments-grid">
        <CommentsCards />
      </div>
      <div className="home-buttons">
        <NavLink to="/" className="home-btn">
          Go Home
        </NavLink>
      </div>
    </div>
  );
}

export default Comments;
