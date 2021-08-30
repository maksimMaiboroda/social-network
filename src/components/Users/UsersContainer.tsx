import React            from "react";
import { connect }      from "react-redux";
import Users            from "./Users";
import {
  follow,
  unfollow,
  requstUsers
}                       from "../../redux/usersReducer";
import Preloader        from "../common/preloader/preloader";
import { compose }      from "redux";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress
}                       from "../../redux/usersSelectors";
import { UserType }     from '../../types'
import { AppStateType } from "../../redux/reduxStore";

interface MapStatePropsType {
    pageSize            : number
    currentPage         : number
    users               : Array<UserType>
    totalUsersCount     : number
    isFetching          : boolean
    followingInProgress : Array<number>
}

interface MapDispatchPropsType {
    requstUsers             : (pageSize: number, currentPage: number) => void
    isFetching              : boolean
    followingInProgress     : Array<number>
    follow                  : (userId: number) => void
    unfollow                : (userId: number) => void
}

interface OwnPropsType {}

type PropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const {pageSize, currentPage} = this.props
    this.props.requstUsers(pageSize, currentPage);
  }

  onPageChanged = (pageNumber: number) => {
    const {pageSize} = this.props
    this.props.requstUsers(pageSize, pageNumber);
  };

  render = () => (
    <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount     = {this.props.totalUsersCount}
        pageSize            = {this.props.pageSize}
        currentPage         = {this.props.currentPage}
        onPageChanged       = {this.onPageChanged}
        users               = {this.props.users}
        unfollow            = {this.props.unfollow}
        follow              = {this.props.follow}
        followingInProgress = {this.props.followingInProgress}
      />
    </>
  );
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users               : getUsers(state),
    pageSize            : getPageSize(state),
    totalUsersCount     : getTotalUsersCount(state),
    currentPage         : getCurrentPage(state),
    isFetching          : getIsFetching(state),
    followingInProgress : getFollowingInProgress(state)
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    requstUsers
  })
)(UsersContainer);
