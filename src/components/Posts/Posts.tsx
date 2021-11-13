import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";
function Posts() {
  const posts = useSelector((state: any) => state.post);
  console.log(posts, "lllllllll");
  const classes = useStyles();
  return (
    <>
      POSTS
      <Post />
    </>
  );
}

export default Posts;
