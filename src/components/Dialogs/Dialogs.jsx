import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageBodyCreater, sendMessageCreater} from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

  const state = props.store.getState().dialogsPage;

  const dialogsElements = state.dialogs.map(el => <DialogItem name={el.name} id={el.id} />);
  const messagesElements = state.messages.map(el => <Message message={el.message} />);
  const newMessageBody = state.newMessageBody;

  const onNewMessageChange = (e) => {
    const body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreater(body));
  };
  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreater());
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
        <div><button onClick={onSendMessageClick}>Send</button></div>
      </div>
    </div>
  );
}

export default Dialogs;
