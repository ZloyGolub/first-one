import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function Posts(props) {

    let postArr = props.postsData.map(x => (<Post id={x.id} name={x.name} postText={x.postText} likes={x.likes} />));

    let newPostElement = React.createRef();

    // function addPost() {
    //     props.addPost();
    // }

    // function updateNewPost() {
    //     props.updateNewPost(newPostElement.current.value);
    // }

    return (
        <div className={`${s.wraper} ${s.wraper_round}`}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={() => props.updateNewPost(newPostElement.current.value)}
                        value={props.newPostContent}
                        ref={newPostElement}>

                    </textarea>
                </div>
                <div>
                    <button onClick={() => props.addPost()}>Add post</button>
                </div>
            </div>
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