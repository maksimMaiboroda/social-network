import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="inputLogin"
          component="input"
          type="text"
          placeholder="Login"
        />
      </div>
      <div>
        <Field
          name="inputPassword"
          component="input"
          type="text"
          placeholder="Password"
        />
      </div>
      <div>
        <Field name="rememberMe" component="input" type="checkbox" />
        Remember me
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default LoginReduxForm;
