import React from 'react'
import User from './User/User'
import s from './UsersAll.module.css'

function UsersAll(props) {

    // let locid = ++props.users[0].id; //прикол с айдишкой
    let locid = 0;

    if (props.users.length === 0) showmore();

    function showmore() {
        props.showmore([
            {
                id: locid++, imgUrl: "https://dummyimage.com/100x100/f0f0f0/aaa", sub: false,
                name: "Snek", bio: "some description", country: "Uk", status: false
            }
        ]
        )
    }   //типа запрос на сервак но нет

    let Users = props.users.map(x => (
        <User id={x.id} imgUrl={x.imgUrl} sub={x.sub} name={x.name} bio={x.bio}
            country={x.country} status={x.status} follow={props.follow} unfollow={props.unfollow} />))

    return (
        <div>
            <div>
                {Users}
            </div>
            <div className={s.Button}>
                <button onClick={showmore}>Show more</button>
            </div>
        </div>
    );
}

export default UsersAll;