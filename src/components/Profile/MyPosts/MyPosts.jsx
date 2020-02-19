import React from "react";
import classes from "./MyPosts.module.css";
import Posts from "./Posts/Posts";
import NewPostFormRedux from "./NewPostForm";

const MyPosts = props => {
  let newPostData = props.oldPostData.map(post => (
    <Posts message={post.message} likesCount={post.likesCount} kei={post.id} />
  ));

  const onSubmit = formData => {
    props.addPostActionCreator(formData.newPostText);
  };

  return (
    <div className={classes.myPosts}>
      <h3>My posts</h3>
      <NewPostFormRedux onSubmit={onSubmit} {...props} />
      <div className={classes.posts}>{newPostData}</div>
    </div>
  );
};

export default MyPosts;
