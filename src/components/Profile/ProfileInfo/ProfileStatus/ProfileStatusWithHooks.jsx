import React, { useState } from "react";

const ProfileStatusWithHooks = props => {
  let [editMode, setEditMode] = useState(false);

  let [status, setStatus] = useState(props.status);

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
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateMode}>{props.status}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            autoFocus={true}
            value={status}
          ></input>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
