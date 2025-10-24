import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function CommentsCards() {
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=50")
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="comment-card"
          onClick={() => navigate(`/comments/${comment.id}`)}
          style={{ cursor: "pointer" }}
        >
          <h2 className="comment-name">{comment.name}</h2>
          <p className="comment-body">{comment.body}</p>
          <div className="comment-footer">
            <span>Email: {comment.email}</span>
            <span>Post ID: {comment.postId}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default CommentsCards;
