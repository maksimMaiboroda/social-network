import React                  from "react";
import classes                from "./ProfileInfo.module.css";
import Preloader              from "../../common/preloader/preloader";
import iconUserNoName         from "../../../assets/img/iconUser.png";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import ProfileData            from "../ProfileDescription/ProfileData/ProfileData";
import ProfileDataReduxForm   from "../ProfileDescription/ProfileDataForm/ProfileDataForm";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
  editModeSaveProfileDesc,
  saveProfileDesc
}) => {
//   const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = e => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = formData => {
    saveProfile(formData);
    //setEditMode(false);
  };

  const goToEditMode = () => {
    saveProfileDesc(true);
  };

  return (
    <div className={classes.content}>
      <div className={classes.pageProfileContent}>
        <div className={classes.contentProfileLeft}>
          <div className={classes.avaPrpfile}>
            
            <img
              className={classes.imgProfile}
              src={profile.photos.large || iconUserNoName}
              alt=''
            />
            {isOwner && (
            <div className={classes.inputfileContainer}>
              <input
                type="file"
                name="file"
                id="file"
                className={classes.inputfile}
                onChange={onMainPhotoSelected}
              />
              <label for="file">Change photo</label>
            </div>
          )}
          </div>
          
        </div>
        <div className={classes.contentProfileRight}>
          <div className={classes.nameUser}>{profile.fullName}</div>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
          {editModeSaveProfileDesc ? (
            <ProfileDataReduxForm
              initialValues={profile}
              profile={profile}
              onSubmit={onSubmit}
              isOwner={isOwner}
              goToEditMode={goToEditMode}
            />
          ) : (
            <ProfileData
              profile={profile}
              isOwner={isOwner}
              goToEditMode={goToEditMode}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
