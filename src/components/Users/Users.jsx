import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

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
      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
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
  );
};

export default Users;
