import React from 'react';
import s from './User.module.css';
import UserPic from './../../../assets/images/user.png';
import { NavLink } from "react-router-dom";
import * as Axios from 'axios';

function User(props) {


    function unfollow() {
        Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
            withCredentials: true,
            headers:
            {
                'API-KEY': 'e9c646da-fb0b-4307-8fc1-300152672f28'
            }
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.unfollow(props.id);
                }
            })
    }


    function follow() {
        Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
            withCredentials: true,
            headers:
            {
                'API-KEY': 'e9c646da-fb0b-4307-8fc1-300152672f28'
            }
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.follow(props.id);
                }
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
                    {props.followed ?
                        <button onClick={unfollow}>Unsubscribe</button>
                        :
                        <button onClick={follow}>Follow</button>
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