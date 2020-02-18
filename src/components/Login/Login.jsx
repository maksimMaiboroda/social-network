import React from "react";
import LoginReduxForm from "./LoginForm/LoginForm";
import { connect } from "react-redux";
import { authUser } from "../../redux/authUserReducer";

const Login = props => {
  const onSubmit = formData => {
    props.authUser(formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

let mapStateToProps = state => ({});

export default connect(mapStateToProps, { authUser })(Login);
