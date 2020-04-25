import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {

    
    let postArr = props.postsData.map(x => (<Post id={x.id} name={x.name} postText={x.postText} likes={x.likes} />));
 
    function addPost() {
        props.addPost();
    }

    function updateNewPost(e) {  
        let text = e.target.value;
        props.updatePost(text);
    }

    return (
        <div className={`${s.wraper} ${s.wraper_round}`}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={updateNewPost}
                        value={props.newPostContent}
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


export default MyPosts;