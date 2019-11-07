import React from "react";
import classes from "./Posts.module.css";

const Posts = () => {
  return (
    <div>
      <img
        src="http://pipcat.ru/wp-content/uploads/2016/12/Cats_Scottish_FoldGlance_502419_1680x10501.jpg"
        className={classes.postsAva}
      ></img>
      <div className={classes.item}>post 1</div>
    </div>
  );
};

export default Posts;
