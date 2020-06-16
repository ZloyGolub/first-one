import React from 'react';
import Header from './Header';
import * as Axios from 'axios';
import { connect } from 'react-redux';
import { setUserData } from './../../redux/authReduser';

class HeaderContainer extends React.Component {

    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, 
        { withCredentials: true })
            .then(response => {
                if (response.data.resultCode === 0){
                    let {id, email, login} = response.data.data;
                    this.props.setUserData(id, email, login);
                }
            });
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, { setUserData })(HeaderContainer);