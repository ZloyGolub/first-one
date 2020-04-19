const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

let store = {
    _state: {
        profile: {
            postsData: [
                { id: 0, name: "Cat", postText: "Some text. Meow", likes: 15 },
                { id: 1, name: "Dog", postText: "Bark", likes: 13 }
            ],
            newPostContent: ""
        },
        dialog: {
            dialogsData: [
                { id: 0, name: 'Andrew' },
                { id: 1, name: 'Sasha' },
                { id: 2, name: 'Alex' },
                { id: 3, name: 'Mark' },
                { id: 4, name: 'Victor' }
            ],
            messagesData: [
                { id: 0, Message: 'Hi, i`m Andrew' },
                { id: 1, Message: 'Hi, i`m Sasha' },
                { id: 2, Message: 'Hi, i`m Alex' },
                { id: 3, Message: 'Hi, i`m Mark' },
                { id: 4, Message: 'Hi, i`m Victor' }
            ],
            newMessageContent: ""
        }
    },

    getState() {
        return this._state;
    },

    _reRenderPage() {

    },

    subscribe(observer) {
        this._reRenderPage = observer;
    },

    addPost() {
        let newPost = {
            id: this._state.profile.postsData.length,
            name: "Snek",
            postText: this._state.profile.newPostContent,
            likes: 0
        }
        this._state.profile.postsData.push(newPost);
        this._state.profile.newPostContent = '';
        this._reRenderPage(this._state);
    },

    updateNewPost(text) {
        this._state.profile.newPostContent = text;
        this._reRenderPage(this._state);
    },

    sendNewMessage(){
        let newMassage = {
            id: this._state.dialog.messagesData.length,
            Message: this._state.dialog.newMessageContent
        }
        this._state.dialog.messagesData.push(newMassage);
        this._state.dialog.newMessageContent = "";
        this._reRenderPage(this._state);
    },

    updateNewMEssage(text){
        this._state.dialog.newMessageContent = text;
        this._reRenderPage(this._state);
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                this.addPost();
                break;
            case UPDATE_POST:
                this.updateNewPost(action.text);
                break;
            case SEND_MESSAGE:
                this.sendNewMessage();
                break;
            case UPDATE_MESSAGE:
                this.updateNewMEssage(action.text);
                break;
        }
    }

}

export const actionAddPost = () => {
    return { type: ADD_POST }
}

export const actionUpdatePost = (text) => {
    return { type: UPDATE_POST, text: text }
}

export const actionSendMessage = () => {
    return { type: SEND_MESSAGE }
}

export const actionUpdateMessage = (text) => {
    return { type: UPDATE_MESSAGE, text: text }
}


export default store;