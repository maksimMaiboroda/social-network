import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = state => ({
  dialogsPage: state.dialogsPage,
  oldDialogsData: state.dialogsPage.oldDialogsData,
  oldMessageData: state.dialogsPage.oldMessageData,
  newMessageText: state.dialogsPage.newMessageText
});




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

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withAuthRedirect
)(Dialogs);
/* 
const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer; */
