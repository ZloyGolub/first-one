import React from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    ActivatEdit = () => {
        this.setState({
            editMode: true
        })
        
        //this.state.editMode=true;
        //this.forceUpdate()
    }

    DeactivatEdit = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.ActivatEdit}>{this.props.aboutMe}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.DeactivatEdit} value={this.props.aboutMe} />
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;