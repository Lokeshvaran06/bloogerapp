import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import AddPost from './components/AddPost';

import './App.css';

function App(){

const [posts, setPosts] = useState([]);

const handlePostAdded = (newPost) => {
  setPosts([newPost, ...posts]);

};

return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-post" element={<AddPost onPostAdded={handlePostAdded} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  </Router>
);

}
export default App;
