const FOLLOW = "FOLLOW";
const UNFOLOW = "UNFOLOW";
const SHOWMORE = "SHOWMORE";
const SET_PAGE = "SET_PAGE";
const SET_COUNT = "SET_COUNT";

let initialState = {
    users: [    ],
    pageSize: 10,
    usersCount: 1,
    currentPage: 2
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {                
                ...state,
                users: state.users.map(x => {
                    if (x.id === action.id) {
                        return { ...x, followed: true }
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
                        return { ...x, followed: false }
                    }
                    return x;
                })
            }
        }
        case SHOWMORE: {
            return {
                ...state,
                users: [ ...action.users]
            }
        }
        case SET_PAGE: {
            return {
                ...state,
                currentPage: action.page
            }
        }
        case SET_COUNT: {
            return{
                ...state,
                usersCount: action.count
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
export const setUsersAC = (users) =>{
    return {type: SHOWMORE, users}
}
export const setPageAC = (page) => {
    return {type: SET_PAGE, page}
}
export const setCountUsers = (count) => ({type: SET_COUNT, count})

export default userReducer;