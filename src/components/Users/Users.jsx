import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";

const Users = props => {
  if (props.users.length < 4) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        props.setUsers(response.data.items);
      });

    /* props.setUsers(
    {
      id: 1,
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg",
      followed: true,
      fulName: { name: "Dmitry", surname: "Kovalev" },
      status: "I am looking for a Job right now...",
      location: { country: "Ukraine", city: "Minsk" }
    },
    {
      id: 2,
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg",
      followed: true,
      fulName: { name: "Svetlana", surname: "Zubenko" },
      status: "I am so pretty",
      location: { country: "Ukraine", city: "Kralivets" }
    },
    {
      id: 3,
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg",
      followed: false,
      fulName: { name: "Sergei", surname: "Kovalev" },
      status: "I like fotball!!!",
      location: { country: "Ukraine", city: "Pigarevka" }
    },
    {
      id: 4,
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg",
      followed: false,
      fulName: { name: "Andrei", surname: "Polshikov" },
      status: "I am free to help you to create good Video Production",
      location: { country: "Ukraine", city: "Kamenka" }
    }
  ); */
  }

  let User = props.users.map(user => (
    <div className={classes.user}>
      <div className={classes.avatarContent}>
        <div className={classes.avatarPhotoWrapper}>
          <img src={user.photoUrl} className={classes.avatarPhoto}></img>
        </div>
        <div>
          {user.followed ? (
            <button
              onClick={() => {
                props.unfollow(user.id);
              }}
              className={classes.btnFollowed}
            >
              UNFOLLOWED
            </button>
          ) : (
            <button
              onClick={() => {
                props.follow(user.id);
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
            <span className={classes.name}>{user.fulName.name}</span>
            <span className={classes.surname}>{user.fulName.surname}</span>
          </div>
          <div className={classes.userStatus}>{user.status}</div>
        </div>
        <div className={classes.userDataRight}>
          <div className={classes.userDataCountry}>{user.location.country}</div>
          <div className={classes.userDataCity}>{user.location.city}</div>
        </div>
      </div>
    </div>
  ));

  return <div>{User}</div>;
};

export default Users;
