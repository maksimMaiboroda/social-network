import React from "react";

const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <span>{contactTitle}: </span>
      <span>{contactValue}</span>
    </div>
  );
};

export default Contacts;
