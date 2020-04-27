import React from 'react'
import User from './User/User'
import s from './UsersAll.module.css'

function UsersAll(props) {

    // let Users = props.users.map(x => (
    // <User  imgUrl={x.imgUrl} sub={x.sub} name={x.name} 
    // bio={x.bio} country={x.country} status={x.status}/>))

    return (
        <div>
            <div>
                {/* {Users} */}
            </div>
            <div className={s.Button}>
                <button>Show more</button>
            </div>
        </div>
    );
}

export default UsersAll;