import React from 'react'
import s from './UsersAll.module.css'
import User from './User/User'

let UsersAll = (props) => {

    let Users = props.users.map(x => (
        <User id={x.id}
            photos={x.photos}
            followed={x.followed}
            name={x.name}
            status={x.status}
            follow={props.follow}
            unfollow={props.unfollow}
            setButtonLock={props.setButtonLock}
            buttonLock={props.buttonLock} />))

    let pagesCount = Math.ceil(props.usersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {/* {pages.map(x => (<span className={s.active}>{alert(x)}</span>))} */}
                {pages.map(x => {
                    return <button className={props.currentPage === x && s.active}
                        onClick={(e) => props.setPage(x)}>{x}</button>
                })}
            </div>
            <div>
                {Users}
            </div>
            <div className={s.Button}>
                <button >Show more</button>
            </div>
        </div>
    )
}

export default UsersAll;