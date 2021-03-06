import { profileAPI } from "../api/api";

const ADD_POST = "profileReduser/ADD_POST";
const SET_USER_PROFILE = "profileReduser/SET_USER_PROFILE";
const SET_STATUS = "profileReduser/SET_STATUS";
const DLETE_POST = "profileReduser/DLETE_POST";

let initialState = {
  oldPostData: [
    { id: 1, message: "Hi, how are you?", likesCount: 20 },
    { id: 2, message: "It's my first post", likesCount: 11 }
  ],
  profile: null,
  status: ""
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

export const getUserProfile = userId => {
  return dispatch => {
    profileAPI.getProfile(userId).then(data => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = userId => {
  return async dispatch => {
    let response = await profileAPI.getStatus(userId);

    dispatch(setStatus(response.data));
  };
};

export const updateStatus = status => {
  return async dispatch => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };
};

export default profileReducer;
