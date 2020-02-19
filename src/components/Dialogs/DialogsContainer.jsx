import React from "react";
import { addMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = state => ({
  dialogsPage: state.dialogsPage,
  oldDialogsData: state.dialogsPage.oldDialogsData,
  oldMessageData: state.dialogsPage.oldMessageData
});

export default compose(
  connect(mapStateToProps, { addMessageActionCreator }),
  //withAuthRedirect
)(Dialogs);
