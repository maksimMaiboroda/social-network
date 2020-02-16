import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import * as axios from "axios";
import { getUserProfile } from "../../redux/profileReducer";
import { withRouter, Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.match.params.userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);



let mapStateToProps = state => ({
  profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent
);
