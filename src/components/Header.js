import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; // Import the SearchBar component
function Header() {
 const handleSearchSubmit = (searchTerm) => {
    console.log('Searching for:', searchTerm);
 };

 return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/explore">explore</Link></li>
        </ul>
      </nav>
      <SearchBar onSearchSubmit={handleSearchSubmit} />
    </header>
 );
}

export default Header;