import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts oldPostData = {props.state.oldPostData} addStatePost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.newPostText} />
    </div>
  );
};

export default Profile;
