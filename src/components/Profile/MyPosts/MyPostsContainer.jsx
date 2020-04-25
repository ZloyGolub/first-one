import React from 'react';
import { actionAddPost, actionUpdatePost } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        postsData: state.profile.postsData,
        newPostContent: state.profile.newPostContent
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(actionAddPost());
        },
        updatePost: (text) => {
            dispatch(actionUpdatePost(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;