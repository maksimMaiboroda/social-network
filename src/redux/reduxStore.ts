import { 
    Action,
    createStore, 
    combineReducers, 
    applyMiddleware, 
    compose 
}                                       from "redux";
import profileReducer                   from "./profileReducer";
import dialogsReducer                   from "./dialogsReducer";
import sidebarReducer                   from "./sidebarReducer";
import usersReducer                     from "./usersReducer";
import authReducer                      from "./authReducer";
import appReducer                       from "./appReducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { reducer as formReducer }       from "redux-form";

const rootReducer = combineReducers({
  profilePage : profileReducer,
  dialogsPage : dialogsReducer,
  sidebar     : sidebarReducer,
  usersPage   : usersReducer,
  auth        : authReducer,
  form        : formReducer,
  app         : appReducer
});

type RootReducerType     = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

type PropertyTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertyTypes<T>>

export type MainThankType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
const store            = createStore(rootReducer,  composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;
