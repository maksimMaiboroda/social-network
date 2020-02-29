import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../../utils/validators/validarion";
import classes from "./NewMessageForm.module.css"

const maxLength50 = maxLengthCreator(50)

const NewMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
     <div className={classes.textareaWrap} > <Field
        className={classes.textarea}
        component={Textarea}
        name="newMessageBody"
        validate={[required, maxLength50]}
        placeholder={"Post message"}
      /></div>
      <button className={classes.btnTextarea} type="submit">Send message!</button>
    </form>
  );
};

const NewMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  NewMessageForm
);

export default NewMessageFormRedux;
