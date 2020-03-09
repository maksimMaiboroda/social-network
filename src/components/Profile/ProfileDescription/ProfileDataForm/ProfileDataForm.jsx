import React from "react";
import classes from "./ProfileDataForm.module.css";
import { reduxForm, Field } from "redux-form";
import {
  required,
  maxLengthCreator
} from "../../../../utils/validators/validarion";
import { Input, Textarea } from "../../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

const ProfileDataForm = ({ handleSubmit, isOwner, error, profile }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>

      {error && <div className={classes.formSummaryError}>{error}</div>}

      <div className={classes.profileDescriptionContainer}>
        <div className={classes.profileDescriptionContent}>
          <div>
            <label>
              <span>My full name: </span>
              <Field
                name="fullName"
                component={Input}
                type="input"
                value="fullName"
              />
            </label>
          </div>
          <div>
            <label>
              <span>I'm looking for a job?: </span>
              <Field
                name="lookingForAJob"
                component={Input}
                type="checkbox"
                value="Yes"
              />
            </label>
          </div>
        </div>

        <div className={classes.profileDescriptionContent}>
          <span className={classes.profileField}>Сareer objective: </span>

          <Field
            className={classes.textarea}
            component={Textarea}
            name="lookingForAJobDescription"
            validate={[required, maxLength50]}
          />
        </div>

        <div className={classes.profileDescriptionContent}>
          <span className={classes.profileField}>About me: </span>
          <Field
            className={classes.textarea}
            component={Textarea}
            name="aboutMe"
            validate={[required, maxLength50]}
          />
        </div>
      </div>

      <div>
        <span>Contacts: </span>
        {Object.keys(profile.contacts).map(key => {
          return (
            <Field
              name={"contacts." + key}
              key={key}
              placeholder={key}
              component={Input}
              type="input"
            ></Field>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "editProfile" })(
  ProfileDataForm
);

export default ProfileDataReduxForm;
