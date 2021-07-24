import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import MyPosts from './MyPosts';
import {addPostActionCreater, updateNewPostTextActionCreater} from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {
  
  const state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreater());
  };

  const onPostChange = (text) => {
    let action = updateNewPostTextActionCreater(text);
    props.store.dispatch(action);
  };

  return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
};

export default MyPostsContainer;