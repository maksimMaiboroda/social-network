import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import headerLogo from "../../assets/img/Logo.svg";

const Header = props => {
  return (
    <header className={classes.header}>
      <div className={classes.headerContainer}>
        <div className={classes.headerContent}>
          <img className={classes.logo} src={headerLogo} alt="lorem" />
          <div className={classes.loginBlock}>
            <span>
              {" "}
              {props.isAuth ? (
                props.login
              ) : (
                <NavLink to={"/login"} className={classes.loginText}>
                  Login
                </NavLink>
              )}
            </span>
            <div>
              <button className={classes.loginButton} onClick={props.logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
