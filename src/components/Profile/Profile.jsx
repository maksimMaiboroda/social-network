import React            from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo      from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  return (
    <div>
      <ProfileInfo
        saveProfileDesc         = {props.saveProfileDesc}
        editModeSaveProfileDesc = {props.editModeSaveProfileDesc}
        userId                  = {props.userId}
        saveProfile             = {props.saveProfile}
        savePhoto               = {props.savePhoto}
        isOwner                 = {props.isOwner}
        profile                 = {props.profile}
        status                  = {props.status}
        updateStatus            = {props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
