import React from "react";
import { Field, reduxForm } from "redux-form";

const NewMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component="textarea" name="newMessageBody" />
      <button type="submit">Send message!</button>
     
    </form>
  );
};

const NewMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  NewMessageForm
);

export default NewMessageFormRedux;
