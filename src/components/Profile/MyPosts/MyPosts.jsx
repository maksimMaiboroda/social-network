import React from "react";
import classes from "./MyPosts.module.css";
import Posts from "./Posts/Posts";
import NewPostFormRedux from "./NewPostForm";

const MyPosts = React.memo(props => {
  let newPostData = [...props.oldPostData]
    .reverse()
    .map(post => (
      <Posts
        message={post.message}
        likesCount={post.likesCount}
        kei={post.id}
      />
    ));

  const onSubmit = formData => {
    props.addPostActionCreator(formData.newPostText);
  };

  return (
    <div className={classes.myPosts}>
      <h3>My posts</h3>
      <NewPostFormRedux onSubmit={onSubmit} {...props} />
      <div className={classes.postBody}>{newPostData}</div>
    </div>
  );
});

export default MyPosts;
