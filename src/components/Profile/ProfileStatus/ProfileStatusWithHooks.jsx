import React, { useState } from "react";
import classes             from "./ProfileStatusWithHooks.module.css";

const ProfileStatusWithHooks = props => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus]     = useState(props.status);

  const onStatusChange = e => {
    setStatus(e.currentTarget.value);
  };

  const activateMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  return (
    <div className={classes.statusContent} >
      {!editMode && (
        <>
          <div>
            <span className={classes.status} onDoubleClick={activateMode}>
              {props.status}
            </span>
          </div>
          <button className={classes.btnStatus}
            onClick={() => {
              activateMode();
            }}
          >
            Change status
          </button>
        </>
      )}
      {editMode && (
        <>
          <div>
            <input
              onChange={onStatusChange}
              onBlur={deactivateEditMode}
              autoFocus={true}
              value={status}
            ></input>
          </div>
          <button className={classes.btnStatus}
        onClick={() => {
          deactivateEditMode();
        }}
      >
        Change status
      </button>
        </>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
