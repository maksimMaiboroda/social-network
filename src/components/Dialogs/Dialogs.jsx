import React from "react";
import classes from "./Dialogs.module.css";
import UserItem from "./UserItem/UserItem";
import UserMessageItem from "./UserMessageItem/UserMessageItem";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/dialogsReducer";

const Dialogs = props => {
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
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = e => {
    let text = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
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
