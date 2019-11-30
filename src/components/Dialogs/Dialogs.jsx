import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.user__list}>
        <div className={classes.user__item + " " + classes.active}>
          <div className={classes.user__ava}>img</div>
          <div className={classes.user__name}>Viktor</div>
        </div>

        <div className={classes.user__item}>
          <div className={classes.user__ava}>img</div>
          <div className={classes.user__name}>Viktor</div>
        </div>

        <div className={classes.user__item}>
          <div className={classes.user__ava}>img</div>
          <div className={classes.user__name}>Viktor</div>
        </div>

        <div className={classes.user__item}>
          <div className={classes.user__ava}>img</div>
          <div className={classes.user__name}>Viktor</div>
        </div>

        <div className={classes.user__item}>
          <div className={classes.user__ava}>img</div>
          <div className={classes.user__name}>Viktor</div>
        </div>

        <div className={classes.user__item}>
          <div className={classes.user__ava}>img</div>
          <div className={classes.user__name}>Viktor</div>
        </div>
      </div>

      <div className={classes.massage__list}>
        <div className={classes.massage__item}>
          <div className={classes.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
            nisi? Perferendis harum pariatur quos delectus quia quasi quisquam
            repellendus, distinctio odit repudiandae voluptate optio veniam odio
            quo ex adipisci fugiat.
          </div>
        </div>

        <div className={classes.massage__item}>
          <div className={classes.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
            nisi? Perferendis harum pariatur quos delectus quia quasi quisquam
            repellendus, distinctio odit repudiandae voluptate optio veniam odio
            quo ex adipisci fugiat.
          </div>
        </div>

        <div className={classes.massage__item}>
          <div className={classes.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
            nisi? Perferendis harum pariatur quos delectus quia quasi quisquam
            repellendus, distinctio odit repudiandae voluptate optio veniam odio
            quo ex adipisci fugiat.
          </div>
        </div>

        <div className={classes.massage__item}>
          <div className={classes.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
            nisi? Perferendis harum pariatur quos delectus quia quasi quisquam
            repellendus, distinctio odit repudiandae voluptate optio veniam odio
            quo ex adipisci fugiat.
          </div>
        </div>

        <div className={classes.massage__item}>
          <div className={classes.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
            nisi? Perferendis harum pariatur quos delectus quia quasi quisquam
            repellendus, distinctio odit repudiandae voluptate optio veniam odio
            quo ex adipisci fugiat.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
