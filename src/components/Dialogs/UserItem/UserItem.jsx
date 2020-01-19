import React from "react";
import classes from "./UserItem.module.css";
import { NavLink } from "react-router-dom";

const UserItem = props => {
  let path = "/dialogs/" + props.urlD;

  return (
    <div className={classes.userElements}>
      <NavLink
        to={path}
        activeClassName={classes.activeLink}
        className={classes.user__item}
      >
        <div className={classes.user__ava}>{props.userAva}</div>
        <div className={classes.user__name}>{props.userName}</div>
      </NavLink>
    </div>
  );
};

export default UserItem;
