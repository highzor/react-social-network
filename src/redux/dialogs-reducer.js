const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 4, message: body });
            return state;
        default:
            return state;
    }
};

export const sendMessageCreater = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreater = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;