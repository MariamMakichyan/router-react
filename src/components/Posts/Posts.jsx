import PostCards from "./Post-cards/Post-cards";

import {NavLink} from "react-router-dom"

import "./Posts.css"

function Posts({posts}) {
  return (
    <div className="posts-container">
      <h1 className="page-title">📚 Blog Posts</h1>
      <div className="posts-grid">
        <PostCards posts={posts}/>
      </div>
      
      <div className="home-buttons">
        <NavLink to="/" className="home-btn">
          Go Back
        </NavLink>
      </div>
    </div>
  );
}

export default Posts;