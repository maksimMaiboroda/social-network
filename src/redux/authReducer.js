import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "authReduser/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "authReduser/GET_CAPTCHA_URL";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null
};

const authReducer = (state = initialState, action) => {
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

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth }
});

export const setAuthCaptchaUrl = captchaUrl => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl }
});

export const getAuthUserData = () => dispatch => {
  return authAPI.me().then(data => {
    if (data.resultCode === 0) {
      let { id, login, email } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

export const loginUser = (email, password, rememberMe, captcha) => dispatch => {
  authAPI.login(email, password, rememberMe, captcha).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (response.data.resultCode === 10) {
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

export const logout = () => async dispatch => {
  let response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const getCaptcha = () => async dispatch => {
  let response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(setAuthCaptchaUrl(captchaUrl));
};

export default authReducer;
