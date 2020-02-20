import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../../utils/validators/validarion";

const maxLength50 = maxLengthCreator(50)

const NewMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newMessageBody"
        validate={[required, maxLength50]}
        placeholder={"Post message"}
      />
      <button type="submit">Send message!</button>
    </form>
  );
};

const NewMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  NewMessageForm
);

export default NewMessageFormRedux;
