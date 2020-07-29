import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {SetUserProfile,getProfile} from './../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import { AuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId = 2;
        this.props.getProfile(userId);
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).
        //     then(response => {
        //         this.props.SetUserProfile(response.data);
        //     });
    }

    

    render() {    
        return (
            <Profile {...this.props} />
        );
    }
}

let MapStateToProps = (state) => (
    {
        profile: state.profile.profile
    }
)

export default compose(
    connect(MapStateToProps,{SetUserProfile, getProfile}),
    withRouter
)(ProfileContainer);


// let RedirectComponent = AuthRedirect(ProfileContainer);

// let ProfileWithUrl = withRouter(RedirectComponent);

// export default connect(MapStateToProps,{SetUserProfile, getProfile})(ProfileWithUrl);