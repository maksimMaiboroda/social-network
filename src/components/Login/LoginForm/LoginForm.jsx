import React                from "react";
import { Field, reduxForm } from "redux-form";
import { Input }            from "../../common/FormsControls/FormsControls";
import { required }         from "../../../utils/validators/validarion";
import classes              from "./LoginForm.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          className={classes.loginInput}
          validate={[required]}
          name="email"
          component={Input}
          type="text"
          placeholder="Login"
        />
      </div>
      <div>
        <Field
          className={classes.loginInput}
          validate={[required]}
          name="password"
          component={Input}
          type="text"
          placeholder="Password"
        />
      </div>
      <div className={classes.loginCheckboxContainer}>
        <Field
          className={classes.loginCheckbox}
          name="rememberMe"
          component={Input}
          type="checkbox"
          value="rememberMe"
        />
        <span>Remember me</span>
      </div>

      {error && <div className={classes.formSummaryError}>{error}</div>}

      {captchaUrl && <img src={captchaUrl} alt=''/>}
      {captchaUrl && 
      <Field
      name="captcha"
      component={Input}
      type="input"
      placeholder="captcha"
    /> }

      <div className={classes.btnContentLogin}>
        <button className={classes.btnLogin} type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default LoginReduxForm;
