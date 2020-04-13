import React from 'react';
import s from './Post.module.css';

function Post(props) {
    return (
        <div className={s.post_wraper}>
            <img src="https://dummyimage.com/100x100/f0f0f0/aaa" alt="" />
            <div className={s.iner}>
                <div className={s.name}>{props.name}</div>
                <div>
                    {props.postText}
                </div>
                <br></br>
                <div>Likes {props.likes}</div>
            </div>
            
        </div>
    );
}

export default Post;