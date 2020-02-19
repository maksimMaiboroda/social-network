import React from "react";
import { Field, reduxForm } from "redux-form";

const NewPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component="textarea" type="text" />
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
