import { getAuthUserData } from "./authReducer";

const INITIALIZATION_SUCCESS = "appReduser/INITIALIZATION_SUCCESS";

interface InitialState {
    initialized: boolean
}

let initialState: InitialState = {
  initialized: false
};

const appReducer = (state = initialState, action: any): InitialState => {
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

interface InitializedSuccessAction {
    type: typeof INITIALIZATION_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessAction => ({
  type: "appReduser/INITIALIZATION_SUCCESS"
});

export const initializedApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
