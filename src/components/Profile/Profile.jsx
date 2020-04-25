import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(){
    return (
        <div className={s.main_content}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;