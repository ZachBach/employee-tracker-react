import React from 'react';
import SearchName from './SearchName.js';
import '../styles/Nav.css';

function Nav() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <button className='navbar-toggler' type='button'>
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse row' id='navbarNav'>
        <div className='search-area col-4'>
          <SearchName />
        </div>
      </div>
    </nav>
  );
}
export default Nav;
