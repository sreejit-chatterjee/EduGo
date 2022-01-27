import React from "react";
import "../App.css";
import { useState } from "react";

export default function Create(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, content, author };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={content}
          rows="10"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <input 
          type="text" 
          required 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Blog Tags:</label>
        <input 
          type="text" 
          required 
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <a href="/uploaded" className="button">Add Blog</a>
      </form>
    </div>
  );
}
