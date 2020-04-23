import React from 'react';
import { actionAddPost, actionUpdatePost } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// function MyPostsContainer(props) {
//     let state = props.store.getState().profile;
//     function addPost() { props.store.dispatch(actionAddPost()); }
//     function updatePost(text) { props.store.dispatch(actionUpdatePost(text)) }
//     return (
//         <div>
//             <MyPosts addPost={addPost} updatePost={updatePost} postsData={state.postsData} newPostContent={state.newPostContent} />
//         </div>
//     )

// }


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

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;