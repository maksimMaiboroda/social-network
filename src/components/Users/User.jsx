import React from "react";
import classes from "./Users.module.css";
import iconUserNoName from "../../assets/img/iconUser.png";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, follow, unfollow }) => {
  return (
    <div className={classes.user}>
      <div className={classes.avatarContent}>
        <div className={classes.avatarPhotoWrapper}>
          <NavLink to={"/profile/" + user.id}>
            <img 
                src={ user.photos.small != null ? user.photos.small : iconUserNoName}
                className={classes.avatarPhoto}
                alt=''
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
              className={classes.btnFollowed}
            >
              UNFOLLOWED
            </button>
          ) : (
            <button
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
              className={classes.btnFollowed}
            >
              FOLLOWED
            </button>
          )}
        </div>
      </div>
      <div className={classes.userDataWrapper}>
        <div className={classes.userData}>
          <div className={classes.userDataLeft}>
            <div className={classes.userFullName}>
              <span className={classes.name}>{user.name}</span>
            </div>
            <div className={classes.userStatus}>{user.status}</div>
          </div>
          <div className={classes.userDataRight}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
