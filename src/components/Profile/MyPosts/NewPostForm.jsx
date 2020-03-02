import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator
} from "../../../utils/validators/validarion";
import { Textarea } from "../../common/FormsControls/FormsControls";
import classes from "./NewPostForm.module.css"

const maxLength200 = maxLengthCreator(200);

const NewPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.textareaWrap}>
        <Field
          className={classes.textarea}
          name="newPostText"
          component={Textarea}
          validate={[required, maxLength200]}
          placeholder={"Post message"}
        />
        <div />
      </div>
      <div>
        <button className={classes.btnTextarea} type="submit">Add new post!</button>
      </div>
    </form>
  );
};

const NewPostFormRedux = reduxForm({
  // a unique name for the form
  form: "newPost"
})(NewPostForm);

export default NewPostFormRedux;
