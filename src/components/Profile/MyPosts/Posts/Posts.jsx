import React from "react";
import classes from "./Posts.module.css";
import avaCat from "../../../../assets/img/avaCat.jpg";

const Posts = props => {
  return (
    <>
      <div className={classes.postsContainer}>
        <img src={avaCat} className={classes.postsAva}></img>
        <div className={classes.item}>{props.message}</div>
      </div>
      <div className={classes.postslikes}>
        <a href="#" className={classes.likesLink}>
         
            {props.likesCount}
            <span className={classes.likesHeart}>
              <i class="fa fa-heart" aria-hidden="true"></i>
            </span>
          
        </a>
      </div>
    </>
  );
};

export default Posts;
