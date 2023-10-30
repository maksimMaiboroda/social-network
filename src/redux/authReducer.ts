import { securityAPI }                      from "../api/security";
import { authAPI }                          from "../api/auth";
import { stopSubmit }                       from "redux-form";
import { InferActionsTypes, MainThankType } from "./reduxStore";
import { ResultCodes, ResultCodesCaptcha }  from "../types";

interface InitialState  {
    userId     : number | null,
    login      : string | null,
    email      : string | null,
    isFetching : boolean,
    isAuth     : boolean,
    captchaUrl : string | null
};

let initialState: InitialState = {
  userId     : null,
  login      : null,
  email      : null,
  isFetching : false,
  isAuth     : false,
  captchaUrl : null
};

const authReducer = (state = initialState, action: ActionsTypes): InitialState => {
  switch (action.type) {
    case 'SET_USER_DATA':
    case 'GET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export interface UserPayload {
    userId : number | null, 
    email  : string | null, 
    login  : string | null, 
    isAuth : boolean
}

type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = MainThankType<ActionsTypes>


export const actions = {
    setAuthUserData : (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'SET_USER_DATA',
        payload: { userId, email, login, isAuth }
    } as const) ,
    setAuthCaptchaUrl: (captchaUrl: string) => ({
        type    : 'GET_CAPTCHA_URL_SUCCESS',
        payload : { captchaUrl }
    } as const)
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  return authAPI.me().then((data) => {
    if (data.resultCode === ResultCodes.Success) {
      let { id, login, email } = data.data;
      dispatch(actions.setAuthUserData(id, email, login, true));
    }
  });
};

export const loginUser = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
  authAPI.login({email, password, rememberMe, captcha}).then((response) => {
    if (response.data.resultCode === ResultCodes.Success) {
      dispatch(getAuthUserData());
    } else {
      if (response.data.resultCode === ResultCodesCaptcha.CaptchaIsRequired) {
        dispatch(getCaptcha());
      }
      let messages =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some error";
      dispatch(stopSubmit("login", { _error: messages }));
    }
  });
};

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === ResultCodes.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

export const getCaptcha = () => async (dispatch: any) => {
  let data  = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(actions.setAuthCaptchaUrl(captchaUrl));
};

export default authReducer;
