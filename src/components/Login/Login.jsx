import React from "react";
import LoginReduxForm from "./LoginForm/LoginForm";
import { connect } from "react-redux";
import { loginUser } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";

const Login = ({loginUser, isAuth}) => {
  const onSubmit = ({email, password, rememberMe}) => {
    loginUser({email, password, rememberMe});
  };
 
  if (isAuth){
    return <Redirect to={"/profile"}/>
  }


  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

let mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { loginUser })(Login);
