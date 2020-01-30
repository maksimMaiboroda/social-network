import React from "react";
import Posts from "./Posts/Posts";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = props => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = text => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      oldPostData={state.profilePage.oldPostData}
      dispatch={props.dispatch}
      newPostText={state.profilePage.newPostText}
      addPost={addPost}
      onPostChange={onPostChange}
    />
  );
};

export default MyPostsContainer;
