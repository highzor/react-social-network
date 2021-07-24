import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

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
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('hi');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};

window.state = store;

export default store;