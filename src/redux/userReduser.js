const FOLLOW = "FOLLOW";
const UNFOLOW = "UNFOLOW";

let initialState = {
    users: [
        {
            id: 0, imgUrl: "https://dummyimage.com/100x100/f0f0f0/aaa", sub: false,
            name: "Snek", bio: "some description", country: "Uk", status: false
        }
    ]
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
                })
            }
        }
        default: return state;
    }
}


export const followAC = (id) => {
    return { type: FOLLOW, id: id }
}
export const unfollowAC = (id) => {
    return { type: UNFOLOW, id: id}
}

export default userReducer;