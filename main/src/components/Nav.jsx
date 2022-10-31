import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import './Nav.css';


function Nav({onSearch}) {
  return (
    <nav>
      <Link to='/'>
        <span className="navbar-brand">
          ⛅ Weather App
        </span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
        
    </nav>
    
  );
};

export default Nav;
