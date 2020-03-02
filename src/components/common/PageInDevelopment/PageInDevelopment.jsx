import React from "react";
import imgPageDevelopment from "../../../assets/img/imgPageDevelopment.svg";
import classes from "./PageInDevelopment.module.css";

const PageInDevelopment = () => {
  return (
    <div>
      <div className={classes.wrappPageDevelopment}>
        <div className={classes.textPageDevelopment} >DEVELOPMENT PAGE</div>
        <img
          className={classes.imgPageDevelopment}
          src={imgPageDevelopment}
          alt=""
        />
      </div>
    </div>
  );
};

export default PageInDevelopment;
