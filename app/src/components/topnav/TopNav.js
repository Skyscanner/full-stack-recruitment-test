import React from 'react';
// css module use - import the scss file as an object, assign dynamic classnames to elements
import './TopNav.scss';

const TopNav = () => (
  <header className='header'>
    <a href="/">
      <span className='logoText'>Skyscanner</span>
      <span className='logo' />
    </a>
     // TODO burger menu icon
  </header>
);

export default TopNav;
