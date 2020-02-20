import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator
} from "../../../utils/validators/validarion";
import { Textarea } from "../../common/FormsControls/FormsControls";
const maxLength10 = maxLengthCreator(10);

const NewPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          validate={[required, maxLength10]}
          placeholder={"Post message"}
        />
      </div>
      <div>
        <button type="submit">Add new post!</button>
      </div>
    </form>
  );
};

const NewPostFormRedux = reduxForm({
  // a unique name for the form
  form: "newPost"
})(NewPostForm);

export default NewPostFormRedux;
