import React from 'react';
import Post from './Post';
import './PostList.css';

function PostList({ posts, onCommentSubmit, comment, setComment }) {
  return (
    <section>
      <h2>Blog Posts</h2>
      <div className="posts">
        {posts.map((post) => (
          <Post key={post._id} post={post} onCommentSubmit={onCommentSubmit} comment={comment} setComment={setComment} />
        ))}
      </div>
    </section>
  );
}

export default PostList;
