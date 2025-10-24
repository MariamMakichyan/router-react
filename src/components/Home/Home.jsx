import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to My Website </h1>
        <p>
          Here you can explore Posts, Comments, Photos, and Users.  
          Choose a section from the menu above to get started!
        </p>

        <div className="home-buttons">
          <NavLink to="/posts" className="home-btn">See Posts</NavLink>
          <NavLink to="/users" className="home-btn">See Users</NavLink>
          <NavLink to ="/comments"className="home-btn">See Comments</NavLink>
          <NavLink to ="/photos"className="home-btn">See Photos</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
