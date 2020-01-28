import React from "react";
import classes from "./MyPosts.module.css";
import Posts from "./Posts/Posts";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../redux/profileReducer";

const MyPosts = props => {
  let newPostData = props.oldPostData.map(post => (
    <Posts message={post.message} likesCount={post.likesCount} />
  ));

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = e => {
    let text = e.target.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={classes.myPosts}>
      <h3>My posts</h3>
      <div className={classes.textareaPost}>
        <textarea onChange={onPostChange} value={props.newPostText} />
      </div>
      <div className={classes.buttonAddPost}>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.posts}>{newPostData}</div>
    </div>
  );
};

export default MyPosts;
