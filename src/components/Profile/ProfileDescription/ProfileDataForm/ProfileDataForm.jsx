import React from "react";
import classes from "./ProfileDataForm.module.css";
import { reduxForm, Field } from "redux-form";
import {
  required,
  maxLengthCreator
} from "../../../../utils/validators/validarion";
import { Input, Textarea } from "../../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

const ProfileDataForm = (handleSubmit, isOwner) => {
  return (
    <form onSubmit={handleSubmit}>
      {isOwner && (
        <div>
          <button>save</button>
        </div>
      )}

      <div className={classes.profileDescriptionContainer}>
        <div className={classes.profileDescriptionContent}>
          <div>
            <label>I'm looking for a job: </label>
            <div>
              <label>
                <Field
                  name="lookingForJob"
                  component={Input}
                  type="radio"
                  value="Yes"
                />{" "}
                Yes
              </label>
              <label>
                <Field
                  name="lookingForJob"
                  component={Input}
                  type="radio"
                  value="No"
                />{" "}
                No
              </label>
            </div>
          </div>
        </div>

        <div className={classes.profileDescriptionContent}>
          <span className={classes.profileField}>My professional skills:</span>

          <Field
            className={classes.textarea}
            component={Textarea}
            name="skills"
            validate={[required, maxLength50]}
            placeholder="skills"
          />
        </div>

        <div className={classes.profileDescriptionContent}>
          <span className={classes.profileField}>About me: </span>
          <Field
            className={classes.textarea}
            component={Textarea}
            name="newMessageBody"
            validate={[required, maxLength50]}
            placeholder="tell us about yourself"
          />
        </div>
      </div>

      {/* <div>
        <span>Contacts: </span>
        {Object.keys(props.profile.contacts).map(key => {
          return (
            <Contacts
              key={key}
              contactTitle={key}
              contactValue={props.profile.contacts[key]}
            />
          );
        })}
      </div> */}
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "editProfile" })(
  ProfileDataForm
);

export default ProfileDataReduxForm;
