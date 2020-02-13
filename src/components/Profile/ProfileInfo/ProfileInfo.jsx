import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import { NavLink } from "react-router-dom";

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={classes.content}>
      <div className={classes.headImages}>
        <img src="http://we.com.mk/wp-content/uploads/2016/12/greece-islands.jpg"></img>
      </div>
      <div className={classes.pageProfileContent}>
        <div className={classes.contentProfileLeft}>
          <div className={classes.avaPrpfile}>
            <img src={props.profile.photos.large}></img>
          </div>
        </div>
        <div className={classes.contentProfileRight}>
          <div className={classes.descriptionProfile}>
            {props.profile.aboutMe}
          </div>
          <div>
            <NavLink
              to={props.profile.contacts.facebook}
              className={classes.linkSocial}
              activeClassName={classes.activeLinkSocial}
            >
              facebook
            </NavLink>
            <NavLink
              to={props.profile.contacts.vk}
              className={classes.linkSocial}
              activeClassName={classes.activeLinkSocial}
            >
              vk
            </NavLink>
            <NavLink
              to={props.profile.contacts.twitter}
              className={classes.linkSocial}
              activeClassName={classes.activeLinkSocial}
            >
              twitter
            </NavLink>
            <NavLink
              to={props.profile.contacts.instagram}
              className={classes.linkSocial}
              activeClassName={classes.activeLinkSocial}
            >
              instagram
            </NavLink>
           
            <NavLink
              to={props.profile.contacts.github}
              className={classes.linkSocial}
              activeClassName={classes.activeLinkSocial}
            >
              github
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
