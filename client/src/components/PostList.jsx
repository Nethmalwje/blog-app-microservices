import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default () => {
  const [posts, setPosts] = useState({});
  const fetchPost = async () => {
    //const res = await axios.get("http://localhost:4002/posts");
    const res = await axios.get("http://posts.com/posts");
    setPosts(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  //console.log(posts);
  const renderedPposts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
        </div>

        <CommentList comments={post.comments} />
        <CommentCreate postId={post.id} />
      </div>
    );
  });
  console.log(posts);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPposts}
    </div>
  );
};
