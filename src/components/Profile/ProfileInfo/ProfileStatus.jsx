import React from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: true
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        {this.props.aboutMe}
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.props.aboutMe} />
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;