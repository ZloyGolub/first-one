import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>;
    }
    
    return (
        <div className={s.Wrapper}>
            {/* <div className={s.Baner}>
                <img className="round-borders" src="https://dummyimage.com/600x100/f0f0f0/aaa" />
            </div> */}
            <div>
                <div>
                    <img src={props.profile.photos.large} />
                </div>
                <div>
                    <ProfileStatus {...props.profile}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;