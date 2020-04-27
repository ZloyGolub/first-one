import React from 'react'

function User(props) {
    return (
        <div>
            <div>
                <div>
                    <img src={props.imgUrl} alt="" />
                    {props.sub ?
                        <button>Folow</button>
                        :
                        <button>Unsubscribe</button>
                    }
                </div>
                <div>
                    <div>{props.name}</div>
                    <div>{props.bio}</div>
                </div>
                <div>
                    <div>{props.country}</div>
                    <div>{props.status}</div>
                </div>
            </div>
        </div>
    )
}

export default User;