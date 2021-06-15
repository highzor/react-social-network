const state = {

    profilePage: {
        posts: [
            { id: 1, message: 'Hello, How are you?', likesCount: 9 },
            { id: 2, message: "Hi, I'm fine, thanks", likesCount: 11 }
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Sasha' },
            { id: 2, name: 'Dima' },
            { id: 3, name: 'Maria' },
            { id: 4, name: 'Andrew' }
        ],
        messages: [
            { id: 1, message: 'hello' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Yo' }
        ]
    }
}

export default state;