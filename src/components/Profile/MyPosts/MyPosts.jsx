import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
      <div>
        My posts
        <div>
          <textarea />
          <button>Add</button>
        </div>
        <div className={classes.posts}>
          <Post message='Hello, How are you?'/>
          <Post message="Hi, I'm fine, thank"/>
        </div>
      </div>
  );
}

export default MyPosts;