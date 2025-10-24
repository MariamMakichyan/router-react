import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./UserDetails.css"

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.log(err));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="user-details">
      <h1>{user.name} ({user.username})</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: <a href={`https://${user.website}`} target="_blank">{user.website}</a></p>
      <p>Company: {user.company.name}</p>
      <p>Address: {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}</p>

      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default UserDetails;
