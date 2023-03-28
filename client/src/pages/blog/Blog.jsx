import React from "react"
import { Card } from "../../components/blog/Card"
import { Category } from "../../components/category/Category"
import { CommentSection } from "../../components/comment/comment"
import "./blog.css"

export const Blog = () => {
  return (
    <>
      <Category />
      <Card />
     <CommentSection/>
    </>
  );
}
