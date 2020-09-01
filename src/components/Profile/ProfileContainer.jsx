import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { SetUserProfile, getProfile, getStatus, updateStatus } from './../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import { AuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 8793;
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }



    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                status={this.props.status} updateStatus={this.props.updateStatus} />
        );
    }
}

let MapStateToProps = (state) => (
    {
        profile: state.profile.profile,
        status: state.profile.status
    }
)

export default compose(
    connect(MapStateToProps, { SetUserProfile, getProfile, getStatus, updateStatus }),
    withRouter
)(ProfileContainer);


// let RedirectComponent = AuthRedirect(ProfileContainer);

// let ProfileWithUrl = withRouter(RedirectComponent);

// export default connect(MapStateToProps,{SetUserProfile, getProfile})(ProfileWithUrl);