import React from "react";
import classes from "./Dialogs.module.css";
import UserItem from "./UserItem/UserItem";
import UserMessageItem from "./UserMessageItem/UserMessageItem";

const Dialogs = props => {
  let newDialogsData = props.oldDialogsData.map(user => (
    <UserItem
      urlD={user.urlD}
      userAva={user.userAva}
      userName={user.userName}
      key={user.id}
    />
  ));

  let newMessageData = props.oldMessageData.map(massage => (
    <UserMessageItem messageText={massage.messageText} id={massage.id} key={massage.id} />
  ));

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = e => {
    let text = e.target.value;
    props.onMessageChange(text);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.user__list}>{newDialogsData}</div>

      <div className={classes.massage__list}>
        {newMessageData}
        <div className={classes.newMessageAdd}>
          <textarea
            onChange={onMessageChange}
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
