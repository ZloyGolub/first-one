let store = {
    _state: {
        profile: {
            postsData: [
                { id: 0, name: "Cat", postText: "Some text. Meow", likes: 15 },
                { id: 1, name: "Dog", postText: "Bark", likes: 13 }
            ],
            newPostContent: "Write some"
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
            ]
        }
    },
    
    getState(){
        return this._state;
    },

    _reRenderPage(){

    },

    subscribe(observer){
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

    updateNewPost(text){
        this._state.profile.newPostContent = text;
        this._reRenderPage(this._state);
    },

    dispatch(action){
        this.action();
    }

}

export default store;