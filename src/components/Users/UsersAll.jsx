import React from 'react'
import User from './User/User'
import s from './UsersAll.module.css'
import * as Axios from 'axios';

class UsersAll extends React.Component {

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
        let Users = this.props.users.map(x => (
            <User id={x.id} photos={x.photos} followed={x.followed} name={x.name} status={x.status}
                follow={this.props.follow} unfollow={this.props.unfollow} />))

        let pagesCount = Math.ceil(this.props.usersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {/* {pages.map(x => (<span className={s.active}>{alert(x)}</span>))} */}
                    {pages.map( x => {
                        return <button className={this.props.currentPage === x && s.active} 
                        onClick={(e) => this.setPage(x) }>{x}</button>
                    })}
                </div>
                <div>
                    {Users}
                </div>
                <div className={s.Button}>
                    <button >Show more</button>
                </div>
            </div>
        );
    }
}

export default UsersAll;