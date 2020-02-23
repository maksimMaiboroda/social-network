import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import { NavLink } from "react-router-dom";
import iconUserNoName from "../../../assets/img/iconUser.png"
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  
  return (
    <div className={classes.content}>
      {/* <div className={classes.headImages}>
        <img src="http://we.com.mk/wp-content/uploads/2016/12/greece-islands.jpg"></img>
      </div> */}
      <div className={classes.pageProfileContent}>
        <div className={classes.contentProfileLeft}>
          <div className={classes.avaPrpfile}>
            <img src={props.profile.photos.large != null ? props.profile.photos.large : iconUserNoName} ></img>
          </div>
        </div>
        <div className={classes.contentProfileRight}>
          <ProfileStatusWithHooks status={props.status}  updateStatus={props.updateStatus}/>
          
          {/* <div className={classes.descriptionProfile}>
            {props.profile.aboutMe}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
