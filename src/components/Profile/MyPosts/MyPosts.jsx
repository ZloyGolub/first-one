import React from 'react';
import './../../../App.css';
import PostsMod from './MyPosts.module.css';
import Post from './Post/Post';

function Posts(){
    return(
        <div className={`${PostsMod.wraper} round-borders`}>
            My Posts
            <div>New post</div>
            <div>
                <Post name="Cat" age="15"/>
                <Post name="Dog" age="13"/>

            </div>
        </div>
    );
}


export default Posts;