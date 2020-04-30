import React from 'react';
import s from './User.module.css';

function User(props) {

    function follow() {
        props.follow(props.id);
    }

    function unfollow() {
        props.unfollow(props.id);
    }
    return (
        <div>
            <div className={s.wrapper}>
                <div className={s.avatar_button}>
                    <div>
                        <img src={props.photos.large} alt="" />
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