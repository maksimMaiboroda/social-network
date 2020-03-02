import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import classes from "./Users.module.css";

let Users = ({
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
          totalItemsCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChanged={onPageChanged}
        />
      </div>
      <div className={classes.usersContainer}>
        {users.map(user => (
          <User
            user={user}
            key={user.id}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
          />
        ))}
      </div>
      
    </div>
  );
};

export default Users;
