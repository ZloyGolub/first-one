import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {SetUserProfile} from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).
            then(response => {
                this.props.SetUserProfile(response.data);
            });
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

let ProfileWithUrl = withRouter(ProfileContainer);

export default connect(MapStateToProps,{SetUserProfile})(ProfileWithUrl);