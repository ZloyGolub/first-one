import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { actionAddPost, actionUpdatePost } from '../../../redux/state';

function Posts(props) {

    let postArr = props.state.postsData.map(x => (<Post id={x.id} name={x.name} postText={x.postText} likes={x.likes} />));
 
    function addPost() {
        props.dispatch(actionAddPost());
    }

    function updateNewPost(e) {   
        let text = e.target.value;
        props.dispatch(actionUpdatePost(text));
    }

    return (
        <div className={`${s.wraper} ${s.wraper_round}`}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={updateNewPost}
                        value={props.state.newPostContent}
                        placeholder="Enter your post">                    
                    </textarea>
                </div>
                <div>
                    <button on onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postArr}
            </div>
        </div>
    );
}


export default Posts;