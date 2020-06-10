import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setPageAC, setCountUsers, setLoaderAC } from "../../redux/userReducer";
import React from 'react';
import * as Axios from 'axios';
import UsersAll from './UsersAll';
import Preloader from './../common/Preloader/Preloader';

class UsersAPIComponent extends React.Component {

    // function showmore() {
    //     props.showmore([
    //         {
    //             id: 0, imgUrl: "https://dummyimage.com/100x100/f0f0f0/aaa", sub: false,
    //             name: "Snek", bio: "some description", country: "Uk", status: false
    //         }
    //     ]
    //     )
    // }   //типа запрос на сервак но нет


    componentDidMount() {
        this.props.setLoader(true);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setLoader(false);
                this.props.setUsers(response.data.items);
                this.props.setCountUsers(response.data.totalCount);
            });
    }

    setPage = (pageNumber) => {
        this.props.setLoader(true);
        this.props.setPage(pageNumber);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setLoader(false);
                this.props.setUsers(response.data.items);
                this.props.setCountUsers(response.data.totalCount);
            });
        
    }

    render() {
        return (
        <>
            {this.props.loader ? <Preloader/> : null}
            <UsersAll users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                usersCount={this.props.usersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                setPage={this.setPage}
            />
        </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        usersCount: state.userPage.usersCount,
        currentPage: state.userPage.currentPage,
        loader: state.userPage.loader
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id));
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setPage: (page) => {
            dispatch(setPageAC(page))
        },
        setCountUsers: (count) => {
            dispatch(setCountUsers(count))
        },
        setLoader: (loader) => {
            dispatch(setLoaderAC(loader))
        }

    }
}

const UsersAPIContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersAPIContainer;