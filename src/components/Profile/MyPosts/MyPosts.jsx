import React from "react";
import classes from "./MyPosts.module.css";
import Posts from "./Posts/Posts";

const MyPosts = (props) => {

  let newPostElements = React.createRef();

  let newPostData = props.oldPostData.map(post => (
    <Posts message={post.message} likesCount={post.likesCount} />
  ));

  let addPost = () => {
    alert("Add post complete!")
  }

  return (
    <div className={classes.myPosts}>
      <h3>My posts</h3>
      <div className={classes.textareaPost}>
        <textarea ref={newPostElements}></textarea>
      </div>
      <div className={classes.buttonAddPost}>
        <button onClick = {addPost}>Add post</button>
      </div>
      <div className={classes.posts}>{newPostData}</div>
    </div>
  );
};

export default MyPosts;
