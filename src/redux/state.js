const store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'Hello, How are you?', likesCount: 9 },
                { id: 2, message: "Hi, I'm fine, thanks", likesCount: 11 }
            ],
            newPostText: 'hello, bob'
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('hi');
    },
    addPost() {
        const newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

window.state = store;

export default store;