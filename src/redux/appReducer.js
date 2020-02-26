import { getAuthUserData } from "./authReducer";

const INITIALIZATION_SUCCESS = "appReduser/INITIALIZATION_SUCCESS";

let initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZATION_SUCCESS:
      return {
        ...state,
        initialized: true
      };

    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: "appReduser/INITIALIZATION_SUCCESS"
});

export const initializedApp = () => dispatch => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
