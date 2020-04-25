const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";

let initialState = {
    postsData: [
        { id: 0, name: "Cat", postText: "Some text. Meow", likes: 15 },
        { id: 1, name: "Dog", postText: "Bark", likes: 13 }
    ],
    newPostContent: ""
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
            let stateCopy = { ...state };
            stateCopy.postsData = [ ...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostContent = '';
            return stateCopy;
        }
        case UPDATE_POST: {
            let stateCopy = {...state};
            stateCopy.newPostContent = action.text;
            return stateCopy;
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

export default profileReducer;