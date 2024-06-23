import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './PostList';
import './Home.css';

function Home() {
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState({});

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:5000/posts');
    setPosts(response.data);
  };

  const handlePostAdded = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handleCommentSubmit = async (postId, comment) => {
    const response = await axios.post(`http://localhost:5000/posts/${postId}/comments`, comment);
    const updatedPost = response.data;
    setPosts(posts.map(post => post._id === postId ? updatedPost : post));
  };

  return (
    <div className="Home">
      <header>
        <h1>Welcome to the Blog</h1>
      </header>

      <main>
        <PostList posts={posts} onCommentSubmit={handleCommentSubmit} comment={comment} setComment={setComment} />
      </main>
    </div>
  );
}

export default Home;
