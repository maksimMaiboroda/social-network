import { userAPI }             from "../api/api";
import { updateObjectInArray } from "../utils/objectHelpers";
import { UserType }            from '../types'

const FOLLOW                       = "usersReduser/FOLLOW";
const UNFOLLOW                     = "usersReduser/UNFOLLOW";
const SET_USERS                    = "usersReduser/SET_USERS";
const SET_CURRENT_PAGE             = "usersReduser/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT        = "usersReduser/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING           = "usersReduser/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "usersReduser/TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
  users               : [] as Array<UserType>,
  pageSize            : 10,
  totalUsersCount     : 20,
  currentPage         : 1,
  isFetching          : true,
  followingInProgress : [] as Array<number>
};

type InitialState = typeof initialState

const usersReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true
        })
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false
        })
      };
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
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

interface FollowSuccessActionType {
    type   : typeof FOLLOW
    userId : number
}

export const followSuccess = (userId: number): FollowSuccessActionType => ({
  type: FOLLOW,
  userId
});

interface UnhallowSuccessActionType {
    type   : typeof UNFOLLOW
    userId : number
}

export const unhallowSuccess = (userId: number): UnhallowSuccessActionType => ({
  type: UNFOLLOW,
  userId
});

interface SetUsersActionType {
    type  : typeof SET_USERS
    users : UserType[]
}

export const setUsers = (users: UserType[]): SetUsersActionType => ({ 
    type: SET_USERS, 
    users 
});

interface SetCurrentPageActionType {
    type        : typeof SET_CURRENT_PAGE
    currentPage : number
}

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  currentPage
});

interface SetTotalUsersCountActionType {
    type        : typeof SET_TOTAL_USERS_COUNT
    count : number
}

export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount
});

interface ToggleIsFetchingActionType {
    type       : typeof TOGGLE_IS_FETCHING
    isFetching : boolean
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

export interface ToggleFollowingProgressActionType {
    type       : typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching : boolean
    userId     : number
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
});

export const requstUsers = (page: number, currentPage: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const data = await userAPI.getUsers(page, currentPage);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch      : any,
  userId        : number,
  apiMethod     : any,
  actionCreator : any
) => {
  dispatch(toggleFollowingProgress(true, userId));
  const data = await apiMethod(userId);

  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const unfollow = (userId: number) => {
  return async (dispatch: any) => {
    followUnfollowFlow(
      dispatch,
      userId,
      userAPI.unfollow.bind(userAPI),
      unhallowSuccess
    );
  };
};

export const follow = (userId: number) => {
  return async (dispatch: any) => {
    followUnfollowFlow(
      dispatch,
      userId,
      userAPI.follow.bind(userAPI),
      followSuccess
    );
  };
};

export default usersReducer;
