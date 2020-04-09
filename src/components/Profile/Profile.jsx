import React from 'react';
import profileMod from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

var Profile = () => {
    return (
        <div className={profileMod.main_content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile;