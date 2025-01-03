import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes['main-header']}>
      <h1>My Nested App</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;