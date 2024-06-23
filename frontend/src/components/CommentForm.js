import React from 'react';
import './CommentForm.css';

function CommentForm({ postId, onCommentSubmit, comment, setComment }) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onCommentSubmit(postId, { author: comment.author, text: comment.text });
    }}>
      <input
        type="text"
        placeholder="Your name"
        value={comment.author || ''}
        onChange={(e) => setComment({ ...comment, author: e.target.value })}
      />
      <textarea
        placeholder="Your comment"
        value={comment.text || ''}
        onChange={(e) => setComment({ ...comment, text: e.target.value })}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
