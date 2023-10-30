import { getAuthUserData } from "./authReducer";
import { InferActionsTypes, MainThankType } from "./reduxStore";

let initialState = {
  initialized: false
};

type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'INITIALIZATION_SUCCESS':
      return {
        ...state,
        initialized: true
      };

    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = MainThankType<ActionsTypes>

export const actions = {
    initializedSuccess :() => ({
        type: 'INITIALIZATION_SUCCESS'
    } as const)
}

export const initializedApp = (): ThunkType => async (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(actions.initializedSuccess());
  });
};

export default appReducer;
