import React from "react";
import classes from "./ProfileData.module.css";

const ProfileData = props => {
  return (
    <div className={classes.profileDescriptionContainer}>
      <div className={classes.profileDescriptionContent}>
        <span className={classes.profileField}>I'm looking for a job: </span>
        {props.profile.lookingForAJob ? <span>Yes</span> : <span>No</span>}
      </div>
      {props.profile.lookingForAJob && (
        <div className={classes.profileDescriptionContent}>
          <span className={classes.profileField}>My professional skills: </span>
          {props.profile.lookingForAJobDescription}
        </div>
      )}
      <div className={classes.profileDescriptionContent}>
        <span className={classes.profileField}>About me: </span>
        {props.profile.aboutMe}
      </div>
    </div>
  );
};

export default ProfileData;
