import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header className={classes.header}>
      <div className={classes.headerContent}>
        <img
          className={classes.logo}
          src="https://upload.wikimedia.org/wikipedia/ru/a/a3/Unity_Logo.png"
          alt="lorem"
        />
        <div className={classes.loginBlock}>
          {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
          
        </div>
      </div>
    </header>
    
  );
};

export default Header;
