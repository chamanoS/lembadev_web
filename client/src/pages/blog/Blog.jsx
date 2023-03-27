import React from "react"
import { Card } from "../../components/blog/Card"
import { Category } from "../../components/category/Category"
import "./blog.css"

export const Blog = () => {
  return (
    <>
      <Category />
      <Card />
      <div id="comments">
        <h2>Comments</h2>
        <div id="comment-list"></div>
        <form id="comment-form">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label for="comment">Comment:</label>
          <textarea id="comment" name="comment" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
