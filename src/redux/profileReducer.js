import { profileApi } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";

let initialState = {
    postsData: [
        { id: 0, name: "Cat", postText: "Some text. Meow", likes: 15 },
        { id: 1, name: "Dog", postText: "Bark", likes: 13 }
    ],
    newPostContent: "",
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postsData.length,
                name: "Snek",
                postText: state.newPostContent,
                likes: 0
            }
            // let stateCopy = { ...state };
            // stateCopy.postsData = [ ...state.postsData];
            // stateCopy.postsData.push(newPost);
            // stateCopy.newPostContent = '';
            // return stateCopy;
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostContent: ''
            }

        }
        case UPDATE_POST: {
            // let stateCopy = {...state};
            // stateCopy.newPostContent = action.text;
            // return stateCopy;
            return {
                ...state,
                newPostContent: action.text
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case UPDATE_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default: return state;
    }
}


export const actionAddPost = () => {
    return { type: ADD_POST }
}

export const actionUpdatePost = (text) => {
    return { type: UPDATE_POST, text: text }
}

export const SetUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const SetUserStatus = (status) => ({ type: SET_USER_STATUS, status })

export const updataUserStatus = (status) => ({ type: UPDATE_USER_STATUS, status })
//ThunkCreators

export const getProfile = (id) => {
    return (dispatch) => {
        profileApi.getProfile(id)
            .then(data => {
                dispatch(SetUserProfile(data));
            })
    }
}

export const getStatus = (id) => {
    return (dispatch) => {
        profileApi.getStatus(id)
            .then(data => {
                dispatch(SetUserStatus(data));
            })
    }
}
//todo
export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0)
                    dispatch(updataUserStatus(status));
            })
    }
}


export default profileReducer;