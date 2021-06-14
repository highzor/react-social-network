import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <div>
        <img src='https://avatars.mds.yandex.net/get-pdb/199965/33629f6f-b08f-472a-895c-654c3b79be6c/s600?webp=false' />
      </div>
      <div>
        ava + desc
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;