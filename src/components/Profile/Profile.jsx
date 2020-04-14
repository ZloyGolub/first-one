import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

var Profile = (props) => {
    return (
        <div className={s.main_content}>
            <ProfileInfo />
            <MyPosts postsData={props.state.postsData}
                newPostContent={props.state.newPostContent}
                addPost={props.addPost}
                updateNewPost={props.updateNewPost} />
        </div>
    );
}

export default Profile;