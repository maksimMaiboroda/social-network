import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    oldPostData: state.profilePage.oldPostData,
    newPostText: state.profilePage.newPostText
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPostActionCreator,
  updateNewPostTextActionCreator
})(MyPosts);

export default MyPostsContainer;
