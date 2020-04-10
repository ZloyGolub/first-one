import React from 'react';
import s from './ProfileInfo.module.css';

function ProfileInfo(props) {
    return (
        <div className={s.Wrapper}>
            <div className={s.Baner}>
                <img className="round-borders" src="https://dummyimage.com/600x100/f0f0f0/aaa" />
            </div>
            <div>
                <div>Avatar</div>
                <div>Description</div>
            </div>
        </div>
    );
}

export default ProfileInfo;