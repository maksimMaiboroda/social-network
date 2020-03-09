import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "profileReduser/ADD_POST";
const SET_USER_PROFILE = "profileReduser/SET_USER_PROFILE";
const SET_STATUS = "profileReduser/SET_STATUS";
const DLETE_POST = "profileReduser/DLETE_POST";
const SAVE_PHOTO_SUCCES = "profileReduser/SAVE_PHOTO_SUCCES";
const SAVE_PROFILE_DESC = "profileReduser/SAVE_PROFILE_DESC";

let initialState = {
  oldPostData: [
    { id: 1, message: "Hi, how are you?", likesCount: 20 },
    { id: 2, message: "It's my first post", likesCount: 11 }
  ],
  profile: null,
  status: "",
  editModeSaveProfileDesc: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        oldPostData: [
          ...state.oldPostData,
          {
            id: 3,
            message: action.postText,
            likesCount: 0
          }
        ]
      };
    }
    case DLETE_POST: {
      return {
        ...state,
        oldPostData: state.oldPostData.filter(p => p.id !== action.postId)
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }

    case SAVE_PHOTO_SUCCES: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos }
      };
    }

    case SAVE_PROFILE_DESC: {
      return {
        ...state,
        editModeSaveProfileDesc: action.switchEditMode
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = postText => ({
  type: "profileReduser/ADD_POST",
  postText
});

export const deletePost = postId => ({
  type: "profileReduser/DLETE_POST",
  postId
});

export const setUserProfile = profile => ({
  type: "profileReduser/SET_USER_PROFILE",
  profile
});

export const setStatus = status => ({
  type: "profileReduser/SET_STATUS",
  status
});

export const savePhotoSucces = photos => ({
  type: "profileReduser/SAVE_PHOTO_SUCCES",
  photos
});

export const saveProfileDesc = (switchEditMode) => ({
  type: "profileReduser/SAVE_PROFILE_DESC",
  switchEditMode
});

export const getUserProfile = userId => {
  return dispatch => {
    profileAPI.getProfile(userId).then(data => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = userId => {
  return async dispatch => {
    const response = await profileAPI.getStatus(userId);

    dispatch(setStatus(response.data));
  };
};

export const updateStatus = status => {
  return async dispatch => {
    const response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };
};

export const savePhoto = file => async dispatch => {
  const response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSucces(response.data.data.photos));
  }
};

export const saveProfile = profile => async (dispatch, getState) => {
  const userId = getState().auth.userId;

  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
    dispatch(saveProfileDesc(false));
  } else {
    dispatch(stopSubmit("editProfile", { _error: response.data.messages[0] }));

    /*     stopSubmit("editProfile", {
      contacts: { facebook: response.data.messages[0] }
    }) */
  }
};

export default profileReducer;
