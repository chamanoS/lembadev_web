import React, { useState, useEffect } from "react";

export const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = { name, comment };
    setComments([...comments, newComment]);

    setName("");
    setComment("");
  };

  useEffect(() => {
    // fetch comments from server or local storage and update state
  }, []);

  return (
    <div id="comments">
      <h2>Comments</h2>
      <div id="comment-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <h3>{comment.name}</h3>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
      <form id="comment-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

