import React from 'react';

import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt={props.model.name}
      src={`https://rickandmortyapi.com/api/character/avatar/${props.model.id}.jpeg`}
    />
    <h2><small>{props.model.name}</small> </h2>
    <p><span>Id: <small>{props.model.id}</small></span> <span> Created: <small>{props.model.created}</small> </span></p>
    <p> Status: <small>{props.model.status}</small> </p>
    <p> Gender: <small>{props.model.gender}</small> </p>    
    <p> Origin: <small>{props.model.origin.name}</small></p>
    <p> Last Location: <small>{props.model.location.name}</small></p>
  </div>
);
