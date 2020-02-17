import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

let initialState = {
  oldPostData: [
    { id: 1, message: "Hi, how are you?", likesCount: 20 },
    { id: 2, message: "It's my first post", likesCount: 11 }
  ],
  newPostText: "",
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        newPostText: "",
        oldPostData: [
          ...state.oldPostData,
          {
            id: 3,
            message: state.newPostText,
            likesCount: 0
          }
        ]
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
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

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: "ADD-POST" });

export const updateNewPostTextActionCreator = text => ({
  type: "UPDATE-NEW-POST-TEXT",
  newText: text
});

export const setUserProfile = profile => ({
  type: "SET-USER-PROFILE",
  profile
});

export const setStatus = status => ({
  type: "SET-STATUS",
  status
});

export const getUserProfile = userId => {
  return dispatch => {
    profileAPI.getProfile(userId).then(data => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = userId => {
  return dispatch => {
    profileAPI.getStatus(userId).then(response => {
      dispatch(setStatus(response.data));
    });
  };
};

export const updateStatus = status => {
  return dispatch => {
    profileAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
