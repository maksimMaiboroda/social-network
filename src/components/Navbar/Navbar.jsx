import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <a href="#" className={classes.linkItem}>
        Profile
      </a>
      <a href="#" className={classes.linkItem}>
        Massages
      </a>
      <a href="#" className={classes.linkItem}>
        News
      </a>
      <a href="#" className={classes.linkItem}>
        Muzic
      </a>
      <a href="#" className={classes.linkItem}>
        Settings
      </a>
    </nav>
  );
};

export default Navbar;
