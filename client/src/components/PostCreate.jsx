import React, { useState } from "react";
import axios from "axios";

export default function PostCreate() {
  const [title, setTitle] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    // const response = await axios.post("http://localhost:4000/posts", {
    const response = await axios.post("http://posts.com/posts/create", {
      title,
    });
    console.log(response);
    setTitle("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
