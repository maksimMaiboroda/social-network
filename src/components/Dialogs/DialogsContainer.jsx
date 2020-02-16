import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = state => ({
  dialogsPage: state.dialogsPage,
  oldDialogsData: state.dialogsPage.oldDialogsData,
  oldMessageData: state.dialogsPage.oldMessageData,
  newMessageText: state.dialogsPage.newMessageText
});

let AuthRedirectComponent = withAuthRedirect(Dialogs);


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

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;
