import React from "react";
import LoginReduxForm from "./LoginForm/LoginForm";
import { connect } from "react-redux";
import { loginUser } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
import classes from "./Login.module.css";
import { AppStateType } from "../../redux/reduxStore";
import { SubmitLoginType } from '../../types'

type MapStatePropsType = {
    isAuth: boolean,
    captchaUrl: string | null
}

type MapDispatchPropsType = {
    loginUser: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = ({ loginUser, isAuth, captchaUrl }) => {
    const onSubmit = ({ email, password, rememberMe, captcha }: SubmitLoginType) => {
        loginUser(email, password, rememberMe, captcha);
    };

    if (isAuth) {
        return <Navigate to={"/profile"} replace />;
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

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { loginUser })(Login);
