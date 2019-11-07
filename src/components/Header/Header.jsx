import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        className={classes.logo}
        src="https://upload.wikimedia.org/wikipedia/ru/a/a3/Unity_Logo.png"
        alt="lorem"
      />
    </header>
  );
};

export default Header;
