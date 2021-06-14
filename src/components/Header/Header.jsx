import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://img.icons8.com/nolan/2x/react-native.png' />
        </header>
    );
}

export default Header;