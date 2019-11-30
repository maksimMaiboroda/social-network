import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <NavLink
        to="/profile"
        className={classes.linkItem}
        activeClassName={classes.activeLink}
      >
        Profile
      </NavLink>
      <NavLink
        to="/dialogs"
        className={classes.linkItem}
        activeClassName={classes.activeLink}
      >
        Massages
      </NavLink>
      <NavLink
        to="/news"
        className={classes.linkItem}
        activeClassName={classes.activeLink}
      >
        News
      </NavLink>
      <NavLink
        to="/muzic"
        className={classes.linkItem}
        activeClassName={classes.activeLink}
      >
        Muzic
      </NavLink>
      <NavLink
        to="/settings"
        className={classes.linkItem}
        activeClassName={classes.activeLink}
      >
        Settings
      </NavLink>
    </nav>
  );
};

export default Navbar;
