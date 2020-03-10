import React from "react";
import classes from "./Contacts.module.css";

const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div className={classes.contactsContainer}>
      <div className={classes.contactsContent}>
        <span className={classes.contactsTitle}>{contactTitle}: </span>
        <span className={classes.contactsValue}>{contactValue}</span>
      </div>
    </div>
  );
};

export default Contacts;
