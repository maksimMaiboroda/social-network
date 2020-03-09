import React from "react";
import LoginReduxForm from "./LoginForm/LoginForm";
import { connect } from "react-redux";
import { loginUser } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import classes from "./Login.module.css";

const Login = ({ loginUser, isAuth, captchaUrl }) => {
  const onSubmit = ({ email, password, rememberMe, captcha }) => {
    loginUser({ email, password, rememberMe, captcha });
  };

  if (isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div className={classes.loginWrapp}>
      <div className={classes.loginContent}>
        <h1 className={classes.loginHeader}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
      </div>
    </div>
  );
};

let mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, { loginUser })(Login);
