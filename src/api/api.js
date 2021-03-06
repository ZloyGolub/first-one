import * as Axios from "axios";


const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:
    {
        'API-KEY': 'e9c646da-fb0b-4307-8fc1-300152672f28'
    }
});

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    unfollow(id){
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
    follow(id){
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    }
}

export const headerApi = {
    getAutorithedUser(){
        return instance.get(`auth/me`)
        .then(response => {
            return response.data;
        })
    }
}

export const profileApi = {
    getProfile(id){
        return instance.get(`profile/${id}`)
        .then(response => {
            return response.data;
        })
    }
    ,
    getStatus(id){
        return instance.get(`profile/status/${id}`)
        .then(response => {
            return response.data;
        })
    },
    updateStatus(status){
        return instance.put(`profile/status`, { status })
        .then(response => {
            return response.data;
        })
    }
}


// export const getUsers = (currentPage = 1, pageSize = 10) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//         .then(response => {
//             return response.data
//         })
// }
