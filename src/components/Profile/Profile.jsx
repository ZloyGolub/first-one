import React from 'react';
import './../../App.css';
import profileMod from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

var Profile = () => {
    return (
        <div className={`${profileMod.main_content} round-borders`}>
            <div className={profileMod.Baner}>
                <img className="round-borders" src="https://dummyimage.com/600x100/f0f0f0/aaa" />
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;