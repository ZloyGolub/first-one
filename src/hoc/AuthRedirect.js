import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


let MapStateToPropsForRedirect = (state) => (
    {
        isAuth: state.auth.isAuth
    }
)

export const AuthRedirect = (Component) =>{
    class RedirectComponent extends React.Component {
        render(){
            if (this.props.isAuth === false) return <Redirect to={'/login'}/>;

            return <Component {...this.props}/>;
        }
    }

    let ConnectedRedirectComponent = connect(MapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedRedirectComponent;
}