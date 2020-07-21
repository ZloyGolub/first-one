import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {SetUserProfile,getProfile} from './../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import { AuthRedirect } from '../../hoc/AuthRedirect';

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

let MapStateToPropsForRedirect = (state) => (
    {
        isAuth: state.auth.isAuth
    }
)

let RedirectComponent = connect(MapStateToPropsForRedirect)(AuthRedirect(ProfileContainer));

//RedirectComponent = connect(MapStateToPropsForRedirect)(RedirectComponent);
// let RedirectComponent = (props) => {    
//     if (this.props.isAuth === false) {
//         return <Redirect to={'/login'} />
//     }
//     return <ProfileContainer {...props}/>
// }

let MapStateToProps = (state) => (
    {
        profile: state.profile.profile
    }
)

let ProfileWithUrl = withRouter(RedirectComponent);

export default connect(MapStateToProps,{SetUserProfile, getProfile})(ProfileWithUrl);