function CommentsCards({comments}){
    return(<>
     {comments.map((comment) => (
          <div key={comment.id} className="comment-card">
            <h2 className="comment-name">{comment.name}</h2>
            <p className="comment-body">{comment.body}</p>
            <div className="comment-footer">
              <span>Email: {comment.email}</span>
              <span>Post ID: {comment.postId}</span>
            </div>
          </div>
        ))}</>)
}

export default CommentsCards