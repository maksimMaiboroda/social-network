import React from "react";
import UserItem from "./UserItem/UserItem";
import UserMessageItem from "./UserMessageItem/UserMessageItem";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = props => {
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = text => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      state={props.store.getState().dialogsPage}
      newMessageText={state.dialogsPage.newMessageText}
      addMessage={addMessage}
      onMessageChange={onMessageChange}
    />
  );
};

export default DialogsContainer;
