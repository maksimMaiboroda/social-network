import { actions } from "../../../redux/profileReducer";
import MyPosts     from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    oldPostData: state.profilePage.oldPostData
  };
};

export default connect(mapStateToProps, { addPostActionCreator: actions.addPostActionCreator })(
  MyPosts
);
