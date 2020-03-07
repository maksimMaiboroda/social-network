import React, { useState } from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import iconUserNoName from "../../../assets/img/iconUser.png";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import ProfileData from "../ProfileDescription/ProfileData/ProfileData";
import ProfileDataReduxForm from "../ProfileDescription/ProfileDataForm/ProfileDataForm";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile
}) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = e => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const userId = 5840;
  const onSubmit = formData => {
    saveProfile(formData, userId);
  };

  return (
    <div className={classes.content}>
      <div className={classes.pageProfileContent}>
        <div className={classes.contentProfileLeft}>
          <div className={classes.avaPrpfile}>
            <img
              className={classes.imgProfile}
              src={profile.photos.large || iconUserNoName}
            ></img>
          </div>
          {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        </div>
        <div className={classes.contentProfileRight}>
          <div className={classes.nameUser}>{profile.fullName}</div>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
          {editMode ? (
            <ProfileDataReduxForm
              onSubmit={onSubmit}
              profile={profile}
              isOwner={isOwner}
              goToEditMode={() => {
                setEditMode(true);
              }}
            />
          ) : (
            <ProfileData
              profile={profile}
              isOwner={isOwner}
              goToEditMode={() => {
                setEditMode(true);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
