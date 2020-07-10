import { headerApi } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } })

//ThunkCreators

export const getAuth = () => {
    return (dispatch) => {
        headerApi.getAutorithedUser()
        .then(data => {
            if (data.resultCode === 0){
                let {id, email, login} = data.data;
                dispatch(setUserData(id, email, login));
            }
        })
    }
}

export default authReduser;