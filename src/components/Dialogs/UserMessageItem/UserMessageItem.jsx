import React from "react";
import classes from "./UserMessageItem.module.css";

const UserMessageItem = props => {
  return (
    <div className={classes.massage__item}>
      <div className={classes.text}>{props.messageText}</div>
    </div>
  );
};

export default UserMessageItem;
