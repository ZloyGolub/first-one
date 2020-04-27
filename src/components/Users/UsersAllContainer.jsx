import { connect } from "react-redux";
import UsersAll from "./UsersAll";
import { followAC, unfollowAC, showmoreAC } from "../../redux/userReducer";

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users
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
        showmore: (users) => {
            dispatch(showmoreAC(users))
        }
    }
}

const UsersAllContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAll);

export default UsersAllContainer;