import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import Message from './Message/Message';
import {updateNewMessageBodyCreater, sendMessageCreater} from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {

  const state = props.store.getState().dialogsPage;

  const onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreater(body));
  };
  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreater());
  };

  return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />;
}

export default DialogsContainer;
