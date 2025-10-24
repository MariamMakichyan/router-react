import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function PostCards() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=50")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      {posts.map((post) => (
        <div
          key={post.id}
          className="post-card"
          onClick={() => navigate(`/posts/${post.id}`)}
          style={{ cursor: "pointer" }}
        >
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}

export default PostCards;
