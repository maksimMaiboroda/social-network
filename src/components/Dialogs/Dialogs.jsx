import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import UserItem from "./UserItem/UserItem";
import UserMessageItem from "./UserMessageItem/UserMessageItem";

const Dialogs = (props) => { 
  
 
  let newDialogsData = props.state.oldDialogsData.map(user => (
    <UserItem
      urlD={user.urlD}
      userAva={user.userAva}
      userName={user.userName}
    />
  ));

  let newMessageData = props.state.oldMessageData.map(massage => (
    <UserMessageItem messageText={massage.messageText} id={massage.id} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.user__list}>{newDialogsData}</div>

      <div className={classes.massage__list}>{newMessageData}</div>
    </div>
  );
};

export default Dialogs;
