import { securityAPI }                     from "../api/security";
import { authAPI }                         from "../api/auth";
import { stopSubmit }                      from "redux-form";
import { ResultCodes, ResultCodesCaptcha } from "../types";

const SET_USER_DATA           = "authReduser/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "authReduser/GET_CAPTCHA_URL";

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

const authReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
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

interface SetAuthUserData {
    type    : typeof SET_USER_DATA,
    payload : UserPayload
}

export const setAuthUserData = (
    userId : number | null, 
    email  : string | null, 
    login  : string | null, 
    isAuth : boolean
): SetAuthUserData  => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth }
});

interface CaptchaPayload {
    captchaUrl: string
}

interface CaptchaUrlActionType {
    type    : typeof GET_CAPTCHA_URL_SUCCESS,
    payload : CaptchaPayload
}

export const setAuthCaptchaUrl = (captchaUrl: string): CaptchaUrlActionType => ({
  type    : GET_CAPTCHA_URL_SUCCESS,
  payload : { captchaUrl }
});

export const getAuthUserData = () => (dispatch: any) => {
  return authAPI.me().then((data: any) => {
    if (data.resultCode === ResultCodes.Success) {
      let { id, login, email } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

export const loginUser = (email: string, password: string, rememberMe: boolean, captcha: string) => (dispatch: any) => {
  authAPI.login({email, password, rememberMe, captcha}).then((response: any) => {
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
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const getCaptcha = () => async (dispatch: any) => {
  let data  = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(setAuthCaptchaUrl(captchaUrl));
};

export default authReducer;
