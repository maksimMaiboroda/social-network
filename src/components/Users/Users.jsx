import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import iconUser from "../../assets/img/iconUser.png";

class Users extends React.Component {
  constructor(props) {
    super(props);

    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render = () => {
    return (
      <div>
        {this.props.users.map(user => (
          <div className={classes.user}>
            <div className={classes.avatarContent}>
              <div className={classes.avatarPhotoWrapper}>
                <img src={iconUser} className={classes.avatarPhoto}></img>
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(user.id);
                    }}
                    className={classes.btnFollowed}
                  >
                    UNFOLLOWED
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id);
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
}

export default Users;
