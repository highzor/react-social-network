import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
  {id: 1, message: 'Hello, How are you?', likesCount: 9},
  {id: 2, message: "Hi, I'm fine, thanks", likesCount: 11}
];

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

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
