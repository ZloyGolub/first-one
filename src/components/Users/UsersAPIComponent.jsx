import React from 'react'
import * as Axios from 'axios';
import UsersAll from './UsersAll';

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
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setCountUsers(response.data.totalCount);
        });
    } 

    setPage = (pageNumber) => {
        this.props.setPage(pageNumber);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setCountUsers(response.data.totalCount);
        });
    }

    render() {
        return (
            <UsersAll users ={this.props.users}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}
            usersCount = {this.props.usersCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            setPage = {this.setPage}
            />
        );
    }
}

export default UsersAPIComponent;