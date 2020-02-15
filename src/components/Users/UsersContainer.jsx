import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
} from "../../redux/usersReducer";
import Preloader from "../common/preloader/preloader";
import { userAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    userAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  onPageChanged = pageNumber => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    userAPI.getUsers(this.props.pageSize, pageNumber)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
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
      />
    </>
  );
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
})(UsersContainer);
