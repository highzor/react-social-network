import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
          <div className={classes.item}>
            <img src='https://yt3.ggpht.com/a/AGF-l79ZmLceSSgZZYXcj6pPLtgb4M12wolTkJHVFw=s800-c-k-c0xffffffff-no-rj-mo' />
            {props.message}
            <div>
              <span>like</span>
            </div>
          </div>
  );
}

export default Post;