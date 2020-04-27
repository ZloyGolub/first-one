import { connect } from "react-redux";
import UsersAll from "./UsersAll";
import { followAC, unfollowAC } from "../../redux/userReduser";

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: () => {
            dispatch(followAC(id));
        },
        unfollow: () => {
            dispatch(unfollowAC(id));
        }
    }
}

const UsersAllContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAll);

export default UsersAllContainer;