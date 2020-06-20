import React from 'react';
import s from './User.module.css';
import UserPic from './../../../assets/images/user.png';
import { NavLink } from "react-router-dom";
import * as Axios from 'axios';
import { usersApi } from "./../../../api/api";

function User(props) {


    function unfollow() {
        props.setButtonLock(true,props.id);
        usersApi.unfollow(props.id)
            .then(data => {
                if (data.resultCode === 0) {
                    props.unfollow(props.id);
                }
                props.setButtonLock(false,props.id);
            })
    }


    function follow() {
        props.setButtonLock(true, props.id);
        usersApi.follow(props.id)
            .then(data => {
                if (data.resultCode === 0) {
                    props.follow(props.id);
                }
                props.setButtonLock(false,props.id);
            })
    }


    return (

        <div>
            <div className={s.wrapper}>
                <div className={s.avatar_button}>
                    <div>
                        <NavLink to={'/profile/' + props.id}>
                            <img src={props.photos.large != null ? props.photos.large : UserPic} alt="" />
                        </NavLink>
                    </div>
                    {props.followed
                        ?
                        <button disabled={props.buttonLock.some(id => id === props.id)} onClick={unfollow}>Unsubscribe</button>
                        :
                        <button disabled={props.buttonLock.some(id => id === props.id)} onClick={follow}>Follow</button>
                    }
                </div>
                <div className={s.name_bio}>
                    <div>{props.name}</div>
                    <div>{props.status}</div>
                </div>
                {/* <div className={s.country_status}>
                    <div>{props.country}</div>
                    {props.status ?
                        <div>Online</div>
                        :
                        <div>Offline</div>
                    }
                </div> */}
            </div>
        </div>
    )
}

export default User;