import { profileAPI }                         from "../api/profile";
import { stopSubmit }                         from "redux-form";
import { InferActionsTypes }                  from "./reduxStore";
import { Photos, Post, Profile, ResultCodes } from '../types'
interface InitialStateType {
    oldPostData             : Post[]
    profile                 : Profile | null
    status                  : string
    editModeSaveProfileDesc : boolean
}

let initialState: InitialStateType = {
  oldPostData: [
    { id: 1, message: "Hi, how are you?", likesCount: 20 },
    { id: 2, message: "It's my first post", likesCount: 11 }
  ],
  profile: null,
  status: "",
  editModeSaveProfileDesc: false,
};


const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'ADD_POST': {
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

    case 'DELETE_POST': {
      return {
        ...state,
        oldPostData: state.oldPostData.filter(p => p.id !== action.postId)
      };
    }

    case 'SET_STATUS': {
      return {
        ...state,
        status: action.status
      };
    }

    case 'SET_USER_PROFILE': {
      return {
        ...state,
        profile: action.profile
      };
    }

    case 'SAVE_PHOTO_SUCCESS': {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as Profile
      };
    }

    case 'SAVE_PROFILE_DESC': {
      return {
        ...state,
        editModeSaveProfileDesc: action.switchEditMode
      };
    }

    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    addPostActionCreator: (postText: string) => ({ type: 'ADD_POST', postText } as const),
      
    deletePost: (postId: number) => ({ type: 'DELETE_POST',  postId } as const),
       
    setUserProfile: (profile: Profile) => ({ type: 'SET_USER_PROFILE', profile } as const),
      
    setStatus: (status: string) => ({ type: 'SET_STATUS', status } as const),
      
    savePhotoSuccess: (photos: Photos) => ({ type: 'SAVE_PHOTO_SUCCESS', photos } as const),
      
    saveProfileDesc: (switchEditMode: boolean) => ({ type: 'SAVE_PROFILE_DESC', switchEditMode } as const),
}

export const getUserProfile = (userId: number) => {
  return (dispatch: any) => {
    profileAPI.getProfile(userId).then((data: any) => {
      dispatch(actions.setUserProfile(data));
    });
  };
};

export const getStatus = (userId: number) => {
  return async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId);

    dispatch(actions.setStatus(response.data));
  };
};

export const updateStatus = (status: string) => {
  return async (dispatch: any) => {
    const response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === ResultCodes.Success) {
      dispatch(actions.setStatus(status));
    }
  };
};

export const savePhoto = (file: any) => async (dispatch: any) => {
  const response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === ResultCodes.Success) {
    dispatch(actions.savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile: Profile) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId;

  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === ResultCodes.Success ) {
    dispatch(getUserProfile(userId));
    dispatch(actions.saveProfileDesc(false));
  } else {
    dispatch(stopSubmit("editProfile", { _error: response.data.messages[0] }));
  }
};

export default profileReducer;
