import React from 'react';

import './sort-box.styles.css';

export const SortBox = props => (
 
     <div className="sorting-box-container">
        <select id="sort-models" name="sort-models"  onChange={props.onSortChange}>
          <option key="0" value="">Sort by ID</option>
          <option key="1" value="ascending">Ascending</option>
          <option key="2" value="descending">Descending</option>
        </select>
        
        </div> 
);
