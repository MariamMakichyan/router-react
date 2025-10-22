import CommentsCards from "./Comments-card/Comments-cards";

import { NavLink } from "react-router-dom";

import "./Comments.css";

function Comments({ comments }) {
  return (
    <div className="comments-container">
      <h1 className="page-title">💬 Comments</h1>
      <div className="comments-grid">
        <CommentsCards comments={comments} />
      </div>
      <div className="home-buttons">
        <NavLink to="/" className="home-btn">
          Go Back
        </NavLink>
      </div>
    </div>
  );
}

export default Comments;
