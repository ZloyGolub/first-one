import { connect } from "react-redux";
import UsersAll from "./UsersAll";
import { followAC, unfollowAC, setUsersAC, setPageAC, setCountUsers } from "../../redux/userReducer";

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        usersCount: state.userPage.usersCount,
        currentPage: state.userPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id));
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setPage: (page) => {
            dispatch(setPageAC(page))
        },
        setCountUsers: (count) => {
            dispatch(setCountUsers(count))
        }
        
    }
}

const UsersAllContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAll);

export default UsersAllContainer;