import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  const posts = [
    {id: 1, message: 'Hello, How are you?', likesCount: 9},
    {id: 2, message: "Hi, I'm fine, thanks", likesCount: 11}
  ];

  const postsElements = posts.map(el => <Post message={el.message} likesCount={el.likesCount} />);

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea />
        </div>
        <div>
          <button>Add</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;