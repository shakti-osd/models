import React from 'react';

import './search-box.styles.css';

export const SearchBox = props => (  
    <div className="search-box-container">
      <p>Search by Name</p> 
      <input
        className='search-box'
        type='search'
        placeholder='Search...'
        onChange={props.onSearchChange}
      />
     </div>
);
