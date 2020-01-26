import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import UserItem from "./UserItem/UserItem";
import UserMessageItem from "./UserMessageItem/UserMessageItem";

const Dialogs = props => {
  let newMessageContent = React.createRef();

  let newDialogsData = props.state.dialogsPage.oldDialogsData.map(user => (
    <UserItem
      urlD={user.urlD}
      userAva={user.userAva}
      userName={user.userName}
    />
  ));

  let newMessageData = props.state.dialogsPage.oldMessageData.map(massage => (
    <UserMessageItem messageText={massage.messageText} id={massage.id} />
  ));

  let addMessage = () => {
    props.dispatch({type: "ADD-MESSAGE"});
  };

  let onMessageChange = () => {
    let text = newMessageContent.current.value;
    props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newText: text});
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.user__list}>{newDialogsData}</div>

      <div className={classes.massage__list}>
        {newMessageData}
        <div className={classes.newMessageAdd}>
          <textarea
            onChange={onMessageChange}
            ref={newMessageContent}
            value={props.newMessageText}
            className={classes.newMessageAddText}
          />
          <button onClick={addMessage} className={classes.newMessageAddButton}>
            отправить сообщение
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
