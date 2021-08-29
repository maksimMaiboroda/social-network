import React        from "react";
import PreloaderImg from "../../../assets/img/Preloader.svg";
import classes      from "./preloader.module.css"

let Preloader = () => {
  return (
    <div className={classes.preloaderWrapp} >
      <img src={PreloaderImg} alt='' />
    </div>
  );
};

export default Preloader;
