import React from 'react';
import { actionAddPost, actionUpdatePost } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

function MyPostsContainer(props){

    let state = props.store.getState().profile;

    function addPost(){
        props.store.dispatch(actionAddPost());
    }

    function updatePost(text){
        props.store.dispatch(actionUpdatePost(text))
    }
    return (
        <div>
            <MyPosts 
            addPost={addPost}
            updatePost={updatePost}
            postsData={state.postsData}
            newPostContent={state.newPostContent}
            />
        </div>
    )
    
}

export default MyPostsContainer;