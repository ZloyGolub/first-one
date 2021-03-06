import { connect } from "react-redux";
import { follow, unfollow, setPage, setButtonLock, getUsers } from "../../redux/userReducer";
import React from 'react';
import * as Axios from 'axios';
import UsersAll from './UsersAll';
import Preloader from './../common/Preloader/Preloader';
import { usersApi } from "../../api/api";
import { AuthRedirect } from "../../hoc/AuthRedirect";
import { compose } from "redux";

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

        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.setLoader(true);

        // usersApi.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.setLoader(false);
        //         this.props.setUsers(data.items);
        //         this.props.setCountUsers(data.totalCount);
        //     });
    }

    setPage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);

        // this.props.setLoader(true);
        // this.props.setPage(pageNumber);
        // usersApi.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.setLoader(false);
        //         this.props.setUsers(data.items);
        //         this.props.setCountUsers(data.totalCount);
        //     });
    }

    render() {
        return (
            <>
                {this.props.loader ? <Preloader /> : null}
                <UsersAll users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    usersCount={this.props.usersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    setPage={this.setPage}
                    setButtonLock={this.props.setButtonLock}
                    buttonLock={this.props.buttonLock}
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
        loader: state.userPage.loader,
        buttonLock: state.userPage.buttonLock
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (id) => {
//             dispatch(followAC(id));
//         },
//         unfollow: (id) => {
//             dispatch(unfollowAC(id));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setPage: (page) => {
//             dispatch(setPageAC(page))
//         },
//         setCountUsers: (count) => {
//             dispatch(setCountUsers(count))
//         },
//         setLoader: (loader) => {
//             dispatch(setLoaderAC(loader))
//         }

//     }
// }

export default compose(
    connect(mapStateToProps,
        {
            follow, unfollow,
            setPage,
            setButtonLock, getUsers
        }),
    AuthRedirect
)(UsersAPIComponent)

// let RedirectComponent = AuthRedirect(UsersAPIComponent);

// const UsersAPIContainer = connect(mapStateToProps,
//     {
//         follow, unfollow,
//         setPage,
//         setButtonLock, getUsers
//     })(RedirectComponent);

// export default UsersAPIContainer;