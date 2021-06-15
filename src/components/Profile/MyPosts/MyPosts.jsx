import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  const postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />);

  const newPostElement = React.createRef();

  const addPost = () => {
    const text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} />
        </div>
        <div>
          <button onClick={addPost}>Add</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;