import UserList from "./UserList/UserList";

import {NavLink} from "react-router-dom"

import "./Users.css";

function Users({ users }) {
  return (
    <div className="user-list-container">
      <h1> 📋 Users List</h1>
      <UserList users={users} />

      <div className="home-buttons">
        <NavLink to="/" className="home-btn">
          Go Back
        </NavLink>
      </div>
    </div>
  );
}

export default Users;
