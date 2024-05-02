import React, { useState } from 'react';
import "./header.css"
import search from "../icons/icons/search-white.png"

function SearchBar({ onSearchSubmit }) {
 const [searchTerm, setSearchTerm] = useState('');

 const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
 };

 const handleSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(searchTerm);
 };

 return (
   <div className="search">
      <form  onSubmit={handleSubmit} className="search-form">
      <input
      className='searchBar'
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {/* <button  className='searchButton'
      type="submit"><img className="searchIcon" src = {search}/></button> */}
    </form>
   </div>
    
 );
}

export default SearchBar;