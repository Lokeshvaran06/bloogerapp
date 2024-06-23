import React from 'react';
import CommentForm from './CommentForm';
import './Post.css';

function Post({ post, onCommentSubmit, comment, setComment }) {
  return (
    <div className="post">
      <h3><center>{post.title}</center></h3>
      <p>By {post.author}</p>
      <p>{new Date(post.date).toLocaleDateString()}</p>
      <div className='tittle'>
      {post.image && <img src={`http://localhost:5000/${post.image}`} alt={post.title} />}
      </div>
      <p>{post.content.substring(0,100000)}...</p>
      <div className="comments">
        <h4>Comments</h4>
        {post.comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.author} said: {comment.text}</p>
            <p>{new Date(comment.date).toLocaleDateString()}</p>
          </div>
        ))}
        <CommentForm postId={post._id} onCommentSubmit={onCommentSubmit} comment={comment} setComment={setComment} />
      </div>
    </div>
  );
}

export default Post;
