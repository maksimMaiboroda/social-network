import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";

const ProfileInfo = props => {
  if (!props.profile){
    return <Preloader/>
  }

  return (
    <div className={classes.content}>
      <div className={classes.headImages}>
        <img src="http://we.com.mk/wp-content/uploads/2016/12/greece-islands.jpg"></img>
      </div>
      <div className={classes.pageTextContent}>
        <div>
          <img src={props.profile.photos.large}></img>
        </div>
        <div>ava + description</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
