import React, { useState } from 'react';
import axios from 'axios';
import './AddPost.css';

function AddPost({ onPostAdded }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }
    const response = await axios.post('http://localhost:5000/posts', formData);
    onPostAdded(response.data);
    setTitle('');
    setAuthor('');
    setContent('');
    setImage(null);
  };

  return (
    <div className="AddPost">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPost;
