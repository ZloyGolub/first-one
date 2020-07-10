import {usersApi} from './../api/api';

const FOLLOW = "FOLLOW";
const UNFOLOW = "UNFOLOW";
const SHOWMORE = "SHOWMORE";
const SET_PAGE = "SET_PAGE";
const SET_COUNT = "SET_COUNT";
const SET_LOADER = "SET_LOADER";
const SET_BUTTON_LOCK = "SET_BUTTON_LOCK";

let initialState = {
    users: [],
    pageSize: 50,
    usersCount: 1,
    currentPage: 1,
    loader: true,
    buttonLock: []
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
                users: [...action.users]
            }
        }
        case SET_PAGE: {
            return {
                ...state,
                currentPage: action.page
            }
        }
        case SET_COUNT: {
            return {
                ...state,
                usersCount: action.count
            }
        }
        case SET_LOADER: {
            return {
                ...state,
                loader: action.loader
            }
        }
        case SET_BUTTON_LOCK: {
            return {
                ...state,
                buttonLock: action.buttonLock ?
                    [...state.buttonLock, action.id]
                    :
                    state.buttonLock.filter(id => id != action.id)
            }
        }
        default: return state;
    }
}


export const doFollow = (id) => {
    return { type: FOLLOW, id }
}
export const doUnfollow = (id) => {
    return { type: UNFOLOW, id }
}
export const setUsers = (users) => {
    return { type: SHOWMORE, users }
}
export const setPage = (page = 1) => {
    return { type: SET_PAGE, page }
}
export const setCountUsers = (count) => ({ type: SET_COUNT, count })

export const setLoader = (loader) => ({ type: SET_LOADER, loader })

export const setButtonLock = (buttonLock, id) => ({ type: SET_BUTTON_LOCK, buttonLock, id })

//ThunkCreators

export const getUsers = (currentPage, pageSize) => {  
    return (dispatch) => {
        dispatch(setLoader(true));
        dispatch(setPage(currentPage));
        usersApi.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setLoader(false));
                dispatch(setUsers(data.items));
                dispatch(setCountUsers(data.totalCount));
            });
    }
}

export const follow = (id) => {  
    return (dispatch) => {
        dispatch(setButtonLock(true, id));
        usersApi.follow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(doFollow(id));
                }
                dispatch(setButtonLock(false, id));
            })
    }
}


export const unfollow = (id) => {  
    return (dispatch) => {
        dispatch(setButtonLock(true, id));
        usersApi.unfollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(doUnfollow(id));
                }
                dispatch(setButtonLock(false, id));
            })
    }
}

export default userReducer;