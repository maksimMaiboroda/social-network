import React, { useState } from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import iconUserNoName from "../../../assets/img/iconUser.png";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileData from "./ProfileDescription/ProfileData";
import ProfileDataForm from "./ProfileDescription/ProfileDataForm";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

const onMainPhotoSelected = (e) => {
  if (e.target.files.length){
    savePhoto(e.target.files[0])
  }
}

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
          {/* {editMode ? ( */}
          <ProfileData profile={profile} />
          {/* ) : (
            <ProfileDataForm profile={profile} />
          )} */}
          <div>
            <span>Contacts: </span>
            {Object.keys(profile.contacts).map(key => {
              return (
                <Contacts
                  key={key}
                  contactTitle={key}
                  contactValue={profile.contacts[key]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <span>{contactTitle}: </span>
      <span>{contactValue}</span>
    </div>
  );
};

export default ProfileInfo;
