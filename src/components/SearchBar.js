import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button type="submit">Search</button>
    </form>
 );
}

export default SearchBar;