import React from "react";
import classes from "./Users.module.css";
import iconUserNoName from "../../assets/img/iconUser.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";
import { followAPI } from "../../api/api";

let Users = props => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return (
            <span
              className={props.currentPage === p && classes.selectedPage}
              onClick={e => {
                props.onPageChanged(p);
              }}
              /* className={classes.pageNumbers} */
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map(user => (
        <div className={classes.user}>
          <div className={classes.avatarContent}>
            <div className={classes.avatarPhotoWrapper}>
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={
                    user.photos.small != null
                      ? user.photos.small
                      : iconUserNoName
                  }
                  className={classes.avatarPhoto}
                ></img>
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  disabled={props.followingInProgress.some(
                    id => id === user.id
                  )}
                  onClick={() => {
                    props.toggleFollowingProgress(true, user.id);
                    followAPI.unfollow(user.id).then(data => {
                      if (data.resultCode === 0) {
                        props.unfollow(user.id);
                      }
                      props.toggleFollowingProgress(false, user.id);
                    });
                  }}
                  className={classes.btnFollowed}
                >
                  UNFOLLOWED
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(
                    id => id === user.id
                  )}
                  onClick={() => {
                    props.toggleFollowingProgress(true, user.id);
                    followAPI.follow(user.id).then(data => {
                      if (data.resultCode === 0) {
                        props.follow(user.id);
                      }
                      props.toggleFollowingProgress(false, user.id);
                    });
                  }}
                  className={classes.btnFollowed}
                >
                  FOLLOWED
                </button>
              )}
            </div>
          </div>
          <div className={classes.userData}>
            <div className={classes.userDataLeft}>
              <div className={classes.userFullName}>
                <span className={classes.name}>{user.name}</span>
                {/* <span className={classes.surname}>{user.fulName.surname}</span> */}
              </div>
              <div className={classes.userStatus}>{user.status}</div>
            </div>
            <div className={classes.userDataRight}>
              {/* <div className={classes.userDataCountry}>{user.location.country}</div>
            <div className={classes.userDataCity}>{user.location.city}</div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
