import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
      <h2>Blog App</h2>
      <div>
        <a href="/">Home</a>
        <a href="/add-post">Add Post</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        
      </div>
    </nav>
  );
}

export default Navbar;
