import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  }, []);

  if (!users.length) return <p>Loading users...</p>;

  return (
    <>
      {users.map((user) => (
        <div
          key={user.id}
          className="user-card"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/users/${user.id}`)}
        >
          <h2>{user.name} ({user.username})</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ))}
    </>
  );
}

export default UserList;
