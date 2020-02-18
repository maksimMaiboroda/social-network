import { authAPI } from "../api/api";

const AUTH_USER_DATA = "AUTH_USER_DATA";

let initialState = {
  email: null,
  password: null,
  rememberMe: null
  /* captcha: true */
};

const authUserReducer = (state = initialState, action) => {

  switch (action.type) {
    case AUTH_USER_DATA: {
      return {
        ...state,
        ...action.formData
      };
    }

    default:
      return state;
  }
};

export const authUserData = formData => ({
  type: "AUTH_USER_DATA",
  formData
});

export const authUser = formData => {
  return dispatch => {
    authAPI.login(formData).then(response => {
      dispatch(authUserData(formData));
    });
  };
};

export default authUserReducer;
