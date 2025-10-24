import UserList from "./UserList/UserList";
import { NavLink } from "react-router-dom";
import "./Users.css";

function Users() {
  return (
    <div className="user-list-container">
      <h1>📋 Users List</h1>
      <UserList />

      <div className="home-buttons">
        <NavLink to="/" className="home-btn">
          Go Home
        </NavLink>
      </div>
    </div>
  );
}

export default Users;
