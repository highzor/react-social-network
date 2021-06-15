import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  const dialogs = [
    {id: 1, name: 'Sasha'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Maria'},
    {id: 4, name: 'Andrew'}
  ];

  const messages = [
    {id: 1, message: 'hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'}
  ];

  const dialogsElements = dialogs.map(el => <DialogItem name={el.name} id={el.id} />);
  const messagesElements = messages.map(el => <Message message={el.message} />);

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
    </div>
  );
}

export default Dialogs;
