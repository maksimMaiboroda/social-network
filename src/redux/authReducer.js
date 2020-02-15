const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    }

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({
  type: "SET-USER-DATA",
  data: { userId, email, login }
});

export default authReducer;
