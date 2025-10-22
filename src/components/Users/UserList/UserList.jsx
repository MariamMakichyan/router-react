
function UserList({users}) {
  return (
    <>
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h2>{user.name} ({user.username})</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: <a href={`https://${user.website}`} target="_blank">{user.website}</a></p>
          <p>Company: {user.company.name}</p>
          <p>Address: {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
        </div>
      ))}
    </>
  );
}

export default UserList;