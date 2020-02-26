import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import iconUserNoName from "../../../assets/img/iconUser.png";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={classes.content}>
      <div className={classes.pageProfileContent}>
        <div className={classes.contentProfileLeft}>
          <div className={classes.avaPrpfile}>
            <img
              src={
                profile.photos.large != null
                  ? profile.photos.large
                  : iconUserNoName
              }
            ></img>
          </div>
        </div>
        <div className={classes.contentProfileRight}>
          <ProfileStatusWithHooks
            status={status}
            updateStatus={updateStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
