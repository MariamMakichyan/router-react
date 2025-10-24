import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PostDetails.css"

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-details">
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <button onClick={() => navigate(-1)} className="back-btn">
        Go Back
      </button>
    </div>
  );
}

export default PostDetails;
