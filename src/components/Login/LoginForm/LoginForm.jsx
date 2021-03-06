import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/FormsControls/FormsControls";
import { required } from "../../../utils/validators/validarion";
import classes from "../Login.module.css";

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          validate={[required]}
          name="email" 
          component={Input}
          type="text"
          placeholder="Login"
        />
      </div>
      <div>
        <Field
          validate={[required]}
          name="password"
          component={Input}
          type="text"
          placeholder="Password"
        />
      </div>
      <div>
        <Field
          name="rememberMe"
          component={Input}
          type="checkbox"
        />
        Remember me
      </div>

    {
      error && <div className={classes.formSummaryError}>
        {error}
      </div>
    }

      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default LoginReduxForm;
