import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="http://we.com.mk/wp-content/uploads/2016/12/greece-islands.jpg"></img>
      </div>
      <div>
        <div img="https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg"></div>
        <div>ava + description</div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
