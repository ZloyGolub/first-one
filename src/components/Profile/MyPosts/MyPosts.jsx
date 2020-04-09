import React from 'react';
import PostsMod from './MyPosts.module.css';
import Post from './Post/Post';

function Posts(){
    let postData = [
        {id: 0, name: "Cat", likes: 15},
        {id: 1, name: "Dog", likes: 13}
    ];

    let postArr = postData.map(x => (<Post id={x.id} name={x.name} likes={x.likes}/>));

    return(
        <div className={`${PostsMod.wraper} ${PostsMod.wraper_round}`}>
            My Posts
            <div>New post</div>
            <div>
                {postArr}
                {/* <Post name={postData[0].name} likes={postData[0].likes}/>
                <Post name={postData[1].name} likes={postData[1].likes}/>
                <Post name={postData[2]?.name?? "None"} likes={postData[2]?.likes ?? "None"}/> */}

            </div>
        </div>
    );
}


export default Posts;