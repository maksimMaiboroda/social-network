import React from "react";
import classes from "./MyPosts.module.css";
import Posts from "./Posts/Posts";

const MyPosts = () => {
  return (
    <div className={classes.myPosts}>
      My posts
      <div>New post</div>
      <div className={classes.posts}>
        <Posts message="Hi, how are you?" likesCount="20" />
      </div>
    </div>
  );
};

export default MyPosts;
