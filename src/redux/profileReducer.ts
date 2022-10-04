import { profileAPI } from "../api/profile";
import { stopSubmit } from "redux-form";
import { 
    Photos, 
    Post, 
    Profile, 
    ResultCodes 
}                     from '../types'

const ADD_POST           = "profileReduser/ADD_POST";
const SET_USER_PROFILE   = "profileReduser/SET_USER_PROFILE";
const SET_STATUS         = "profileReduser/SET_STATUS";
const DELETE_POST        = "profileReduser/DLETE_POST";
const SAVE_PHOTO_SUCCESS = "profileReduser/SAVE_PHOTO_SUCCES";
const SAVE_PROFILE_DESC  = "profileReduser/SAVE_PROFILE_DESC";

interface InitialState {
    oldPostData             : Post[]
    profile                 : Profile | null
    status                  : string
    editModeSaveProfileDesc : boolean
}

let initialState: InitialState = {
  oldPostData: [
    { id: 1, message: "Hi, how are you?", likesCount: 20 },
    { id: 2, message: "It's my first post", likesCount: 11 }
  ],
  profile: null,
  status: "",
  editModeSaveProfileDesc: false,
};

const profileReducer = (state = initialState, action: any): InitialState => {
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

    case DELETE_POST: {
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

    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as Profile
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

interface AddPostActionType {
    type     : typeof ADD_POST,
    postText : string
}

export const addPostActionCreator = (postText: string): AddPostActionType => ({
  type: ADD_POST,
  postText
});

interface DeletePostActionType {
    type   : typeof DELETE_POST,
    postId : number
}

export const deletePost = (postId: number): DeletePostActionType => ({
  type: DELETE_POST,
  postId
});

interface SetUserProfileActionType {
    type    : typeof SET_USER_PROFILE,
    profile : Profile
}

export const setUserProfile = (profile: Profile): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile
});

interface SetStatusActionType {
    type   : typeof SET_STATUS,
    status : string
}

export const setStatus = (status: string): SetStatusActionType => ({
  type: SET_STATUS,
  status
});

interface SavePhotoSuccessActionType {
    type   : typeof SAVE_PHOTO_SUCCESS,
    photos : Photos
}

export const savePhotoSuccess = (photos: Photos): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos
});

interface SaveProfileDescActionType {
    type           : typeof SAVE_PROFILE_DESC,
    switchEditMode : boolean
}

export const saveProfileDesc = (switchEditMode: boolean): SaveProfileDescActionType => ({
  type: SAVE_PROFILE_DESC,
  switchEditMode
});

export const getUserProfile = (userId: number) => {
  return (dispatch: any) => {
    profileAPI.getProfile(userId).then((data: any) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = (userId: number) => {
  return async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId);

    dispatch(setStatus(response.data));
  };
};

export const updateStatus = (status: string) => {
  return async (dispatch: any) => {
    const response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === ResultCodes.Success) {
      dispatch(setStatus(status));
    }
  };
};

export const savePhoto = (file: any) => async (dispatch: any) => {
  const response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === ResultCodes.Success) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile: Profile) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId;

  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === ResultCodes.Success ) {
    dispatch(getUserProfile(userId));
    dispatch(saveProfileDesc(false));
  } else {
    dispatch(stopSubmit("editProfile", { _error: response.data.messages[0] }));
  }
};

export default profileReducer;
