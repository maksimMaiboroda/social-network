import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
    oldDialogsData: state.dialogsPage.oldDialogsData,
    oldMessageData: state.dialogsPage.oldMessageData,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth
  };
};

let mapDispatchToProps = dispatch => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    onMessageChange: text => {
      dispatch(updateNewMessageTextActionCreator(text));
    }
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
