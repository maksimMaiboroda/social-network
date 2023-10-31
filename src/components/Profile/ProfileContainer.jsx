import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { actions, getUserProfile, getStatus } from "../../redux/profileReducer";

const ProfileContainer = (props) => {
    const navigate = useNavigate();
    const { userId } = useParams();

    const refreshProfile = () => {
        let currentUserId = userId;
        if (!currentUserId) {
            currentUserId = props.autorizedUser;
            if (!currentUserId) {
                navigate("/login");
            }
        }
        props.getUserProfile(currentUserId);
        props.getStatus(currentUserId);
    };

    React.useEffect(() => {
        refreshProfile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

    return (
        <Profile
            {...props}
            editModeSaveProfileDesc={props.editModeSaveProfileDesc}
            userId={userId}
            isOwner={!userId}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            savePhoto={props.savePhoto}
        />
    );
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUser: state.auth.userId,
    isAuth: state.auth.isAuth,
    editModeSaveProfileDesc: state.profilePage.editModeSaveProfileDesc,
});

export default connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus: actions.updateStatus,
    savePhoto: actions.savePhoto,
    saveProfile: actions.saveProfile,
    saveProfileDesc: actions.saveProfileDesc,
})(ProfileContainer);
