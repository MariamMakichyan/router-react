import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CommentDetails.css"; 

function CommentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then(res => res.json())
      .then(data => setComment(data))
      .catch(err => console.log(err));
  }, [id]);

  if (!comment) return <h2>Loading...</h2>;

  return (
    <div className="details-container">
      <h1>💬 {comment.name}</h1>
      <p className="comment-body">{comment.body}</p>

      <div className="details-info">
        <p><strong>Email:</strong> {comment.email}</p>
        <p><strong>Post ID:</strong> {comment.postId}</p>
      </div>

      <button className="back-btn" onClick={() => navigate(-1)}>
        🔙 Go Back
      </button>
    </div>
  );
}

export default CommentDetails;
