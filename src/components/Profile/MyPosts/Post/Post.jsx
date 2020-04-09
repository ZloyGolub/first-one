import React from 'react';
import PostMod from './Post.module.css';

function Post(props) {
    return (
        <div className={PostMod.post_wraper}>
            <img src="https://dummyimage.com/100x100/f0f0f0/aaa" alt="" />
            <div className={PostMod.iner}>
                <div className={PostMod.name}>{props.name}</div>
                <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero facere corporis consequuntur ullam distinctio iure. Distinctio autem quidem molestiae ducimus minus dolore voluptates eligendi, ea odit vero alias hic omnis.</div>
                <br></br>
                <div>Likes {props.likes}</div>
            </div>
            
        </div>
    );
}

export default Post;