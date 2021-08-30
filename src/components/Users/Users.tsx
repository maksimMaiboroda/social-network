import React        from "react";
import Paginator    from "../common/Paginator/Paginator";
import User         from "./User";
import { UserType } from '../../types'
import classes      from "./Users.module.css";

interface Props {
    totalUsersCount     : number
    pageSize            : number
    currentPage         : number
    onPageChanged       : (pageNumber : number) => void
    users               : Array<UserType>
    user?               : UserType
    followingInProgress : Array<number>
    follow              : (userId: number) => void
    unfollow            : (userId: number) => void
}

let Users: React.FC<Props> = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  users,
  user,
  followingInProgress,
  follow,
  unfollow
}) => {
  return (
    <div>
      <div className={classes.usersPaginator}>
        <Paginator
          totalItemsCount = {totalUsersCount}
          pageSize        = {pageSize}
          currentPage     = {currentPage}
          onPageChanged   = {onPageChanged}
        />
      </div>
      <div className={classes.usersContainer}>
        {users.map(user => (
          <User
            user                = {user}
            key                 = {user.id}
            followingInProgress = {followingInProgress}
            follow              = {follow}
            unfollow            = {unfollow}
          />
        ))}
      </div>
      
    </div>
  );
};

export default Users;
