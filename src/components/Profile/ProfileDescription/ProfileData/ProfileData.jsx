import React from "react";
import classes from "./ProfileData.module.css";
import Contacts from "../Contacts/Contacts";

const ProfileData = props => {
  return (
    <div>
      {props.isOwner && (
        <div>
          <button onClick={props.goToEditMode}>Edit profile</button>
        </div>
      )}

      <div className={classes.profileDescriptionContainer}>
        <div className={classes.profileDescriptionContent}>
          <span className={classes.profileField}>I'm looking for a job: </span>
          {props.profile.lookingForAJob ? <span>Yes</span> : <span>No</span>}
        </div>

        {props.profile.lookingForAJob && (
          <div className={classes.profileDescriptionContent}>
            <span className={classes.profileField}>
            Сareer objective::{" "}
            </span>
            {props.profile.lookingForAJobDescription}
          </div>
        )}

        <div className={classes.profileDescriptionContent}>
          <span className={classes.profileField}>About me: </span>
          {props.profile.aboutMe}
        </div>
      </div>

      {/* <div>
        <span>Contacts: </span>
        {Object.keys(props.profile.contacts).map(key => {
          return (
            <Contacts
              key={key}
              contactTitle={key}
              contactValue={props.profile.contacts[key]}
            />
          );
        })}
      </div> */}
    </div>
  );
};

export default ProfileData;
