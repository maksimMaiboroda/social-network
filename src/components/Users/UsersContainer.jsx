import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  requstUsers
} from "../../redux/usersReducer";
import Preloader from "../common/preloader/preloader";
import { compose } from "redux";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const {pageSize, currentPage} = this.props
    this.props.requstUsers(pageSize, currentPage);
  }

  onPageChanged = pageNumber => {
    const {pageSize} = this.props
    this.props.requstUsers(pageSize, pageNumber);
  };

  render = () => (
    <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        followingInProgress={this.props.followingInProgress}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
      />
    </>
  );
}

let mapStateToProps = state => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    requstUsers
  })
)(UsersContainer);
