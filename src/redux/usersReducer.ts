import { userAPI }                         from "../api/user";
import { updateObjectInArray }             from "../utils/objectHelpers";
import { ResultCodes, UserType }           from '../types'
import { ThunkAction }                     from "redux-thunk";
import { AppStateType, InferActionsTypes } from "./reduxStore";
import { Dispatch }                        from "react";

const initialState = {
  users               : [] as Array<UserType>,
  pageSize            : 10,
  totalUsersCount     : 20,
  currentPage         : 1,
  isFetching          : true,
  followingInProgress : [] as Array<number>
};

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'FOLLOW': {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true
        })
      };
    }
    case 'UNFOLLOW': {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false
        })
      };
    }
    case 'SET_USERS': {
      return { ...state, users: action.users };
    }
    case 'SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.currentPage };
    }
    case 'SET_TOTAL_USERS_COUNT': {
      return { ...state, totalUsersCount: action.count };
    }
    case 'TOGGLE_IS_FETCHING': {
      return { ...state, isFetching: action.isFetching };
    }
    case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      };
    }
    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    followSuccess: (userId: number) => ({
        type: 'FOLLOW',
        userId
    } as const),
      
    unhallowSuccess: (userId: number) => ({
        type: 'UNFOLLOW',
        userId
    } as const),
      
    setUsers: (users: UserType[]) => ({ 
          type: 'SET_USERS', 
          users 
    } as const),
      
    setCurrentPage: (currentPage: number) => ({
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const),
      
    setTotalUsersCount: (totalUsersCount: number) => ({
        type: 'SET_TOTAL_USERS_COUNT',
        count: totalUsersCount
    } as const),
      
    toggleIsFetching: (isFetching: boolean) => ({
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    } as const),
      
    toggleFollowingProgress: (isFetching: boolean, userId: number)  => ({
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const)
}

type DispatchType = Dispatch<ActionsTypes>
type ThunkType =ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requstUsers = (page: number, currentPage: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));

    const data = await userAPI.getUsers(page, currentPage);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
  };
};

const _followUnfollowFlow = async (
  dispatch      : DispatchType,
  userId        : number,
  apiMethod     : any,
  actionCreator : (userId: number) => ActionsTypes
) => {
  dispatch(actions.toggleFollowingProgress(true, userId));
  const data = await apiMethod(userId);

  if (data.resultCode === ResultCodes.Success) {
    dispatch(actionCreator(userId));
  }
  dispatch(actions.toggleFollowingProgress(false, userId));
};

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    _followUnfollowFlow(
      dispatch,
      userId,
      userAPI.unfollow.bind(userAPI),
      actions.unhallowSuccess
    );
  };
};

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    _followUnfollowFlow(
      dispatch,
      userId,
      userAPI.follow.bind(userAPI),
      actions.followSuccess
    );
  };
};

export default usersReducer;
