import React from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({status: this.props.status })
        }
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
        this.props.updateStatus(this.state.status)
    }

    onStatusChange =(e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.ActivatEdit}>{this.props.status || '---------' }</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.DeactivatEdit} value={this.state.status} />
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;