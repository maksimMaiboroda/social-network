import React               from "react";
import classes             from "./Dialogs.module.css";
import UserItem            from "./UserItem/UserItem";
import UserMessageItem     from "./UserMessageItem/UserMessageItem";
import NewMessageFormRedux from "./NewMessageForm/NewMessageForm";

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
    <UserMessageItem
      messageText={massage.messageText}
      id={massage.id}
      key={massage.id}
    />
  ));

  const addNewMessage = formDatta => {
    props.addMessageActionCreator(formDatta.newMessageBody);
  };

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.userList}>{newDialogsData}</div>

        <div className={classes.massageList}>{newMessageData}</div>
      </div>
      <div className={classes.newMessageAdd}>
        <NewMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
