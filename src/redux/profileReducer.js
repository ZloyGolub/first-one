const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";

function addPost(state) {
    let newPost = {
        id: state.postsData.length,
        name: "Snek",
        postText: state.newPostContent,
        likes: 0
    }
    state.postsData.push(newPost);
    state.newPostContent = '';    
    return state;
}

function updateNewPost(state, text) {
    state.newPostContent = text;
    return state;
}

let initialState = {
    postsData: [
        { id: 0, name: "Cat", postText: "Some text. Meow", likes: 15 },
        { id: 1, name: "Dog", postText: "Bark", likes: 13 }
    ],
    newPostContent: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return state = addPost(state);
        case UPDATE_POST:
            return state = updateNewPost(state, action.text);
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