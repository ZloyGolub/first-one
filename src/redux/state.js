
let state = {
    profile: {
        postsData: [
            { id: 0, name: "Cat", postText: "Some text. Meow",  likes: 15 },
            { id: 1, name: "Dog", postText: "Bark", likes: 13 }
        ]
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
}

export let addPost = (text) =>{
    let newPost = {       
        id: state.profile.postsData.length,
        name: "Snek",
        postText: text,
        likes: 0
    }

    state.profile.postsData.push(newPost);
}

export default state;