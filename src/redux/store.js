import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

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

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialog = dialogReducer(this._state.dialog, action);
        this._reRenderPage(this._state);
    }

}



export default store;