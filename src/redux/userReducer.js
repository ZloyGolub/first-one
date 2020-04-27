const FOLLOW = "FOLLOW";
const UNFOLOW = "UNFOLOW";
const SHOWMORE = "SHOWMORE";

let initialState = {
    users: [    ]
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {                
                ...state,
                users: state.users.map(x => {
                    if (x.id === action.id) {
                        return { ...x, sub: true }
                    }
                    return x;
                })
            }
        }
        case UNFOLOW: {
            return {
                ...state,
                users: state.users.map(x => {
                    if (x.id === action.id) {
                        return { ...x, sub: false }
                    }
                    return x;
                })
            }
        }
        case SHOWMORE: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default: return state;
    }
}


export const followAC = (id) => {
    return { type: FOLLOW, id }
}
export const unfollowAC = (id) => {
    return { type: UNFOLOW, id}
}
export const showmoreAC = (users) =>{
    return {type: SHOWMORE, users}
}

export default userReducer;