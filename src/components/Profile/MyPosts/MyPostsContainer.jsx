import React from "react";
import { addPostActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    oldPostData: state.profilePage.oldPostData
  };
};

const MyPostsContainer = connect(mapStateToProps, { addPostActionCreator })(
  MyPosts
);

export default MyPostsContainer;
