function PostCards({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-body">{post.body}</p>
          <div className="post-footer">
          </div>
        </div>
      ))}
    </>
  );
}

export default PostCards
