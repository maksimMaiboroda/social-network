import React   from "react";
import classes from "./Posts.module.css";
import avaCat  from "../../../../assets/img/avaCat.jpg";

const Posts = props => {
  return (
    <>
      <div className={classes.postsContainer}>
        <img src={avaCat} className={classes.postsAva} alt=''/>
        <div className={classes.item}>{props.message}</div>
      </div>
      <div className={classes.postslikes}>
        <button className={classes.likesLink}>
            {props.likesCount}
            <span className={classes.likesHeart}>
              <i className="fa fa-heart" aria-hidden="true"></i>
            </span>
        </button>
      </div>
    </>
  );
};

export default Posts;
