import React from "react";
import classes from "./MyPosts.module.css";
import Posts from "./Posts/Posts";
import NewPostForm from "./NewPostForm";

const MyPosts = props => {
  let newPostData = props.oldPostData.map(post => (
    <Posts message={post.message} likesCount={post.likesCount} kei={post.id} />
  ));

  const onSubmit = formData => {
    console.log(formData);
  };

  /*  let addPost = () => {
    props.addPostActionCreator();
  };

  let onPostChange = e => {
    let text = e.target.value;
    props.updateNewPostTextActionCreator(text);
  }; */

  return (
    <div className={classes.myPosts}>
      <h3>My posts</h3>
      <NewPostForm onSubmit={onSubmit} {...props} />
      <div className={classes.posts}>{newPostData}</div>
    </div>
  );
};

export default MyPosts;
