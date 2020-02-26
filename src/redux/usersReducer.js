import { userAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objectHelpers";

const FOLLOW = "usersReduser/FOLLOW";
const UNFOLLOW = "usersReduser/UNFOLLOW";
const SET_USERS = "usersReduser/SET_USERS";
const SET_CURRENT_PAGE = "usersReduser/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "usersReduser/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "usersReduser/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS =
  "usersReduser/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 50,
  totalUsersCount: 20,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true
        })
        /* state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }) */
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false
        })

        /* state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }) */
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

export const followSuccess = userId => ({
  type: "usersReduser/FOLLOW",
  userId
});
export const unfollowSuccess = userId => ({
  type: "usersReduser/UNFOLLOW",
  userId
});
export const setUsers = users => ({ type: "usersReduser/SET_USERS", users });
export const setCurrentPage = currentPage => ({
  type: "usersReduser/SET_CURRENT_PAGE",
  currentPage
});
export const setTotalUsersCount = totalUsersCount => ({
  type: "usersReduser/SET_TOTAL_USERS_COUNT",
  count: totalUsersCount
});
export const toggleIsFetching = isFetching => ({
  type: "usersReduser/TOGGLE_IS_FETCHING",
  isFetching
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: "usersReduser/TOGGLE_IS_FOLLOWING_PROGRESS",
  isFetching,
  userId
});

export const requstUsers = (page, currentPage) => {
  return async dispatch => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let data = await userAPI.getUsers(page, currentPage);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId));
  let data = await apiMethod(userId);

  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const unfollow = userId => {
  return async dispatch => {
    followUnfollowFlow(
      dispatch,
      userId,
      userAPI.unfollow.bind(userAPI),
      unfollowSuccess
    );
  };
};

export const follow = userId => {
  return async dispatch => {
    followUnfollowFlow(
      dispatch,
      userId,
      userAPI.follow.bind(userAPI),
      followSuccess
    );
  };
};

export default usersReducer;
