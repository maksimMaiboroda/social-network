import React from "react";
import classes from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";

let NewPostForm = props => {
  /*  let addPost = () => {
    props.addPostActionCreator();
  };

  let onPostChange = e => {
    let text = e.target.value;
    props.updateNewPostTextActionCreator(text);
  }; */

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component="textarea" type="text" />
      </div>
      <div>
        <button type="submit">Add new post!</button>
      </div>

      {/* <div className={classes.textareaPost}>
        <textarea onChange={onPostChange} value={props.newPostText} />
      </div>
      <div className={classes.buttonAddPost}>
        <button onClick={addPost}>Add post</button>
      </div> */}
    </form>
  );
};

NewPostForm = reduxForm({
  // a unique name for the form
  form: "newPost"
})(NewPostForm);

export default NewPostForm;
