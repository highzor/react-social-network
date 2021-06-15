import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://avatars.mds.yandex.net/get-pdb/199965/33629f6f-b08f-472a-895c-654c3b79be6c/s600?webp=false' />
      </div>
      <div className={classes.descriptionBlock}>
        ava + desc
      </div>
    </div>
  );
}

export default ProfileInfo;