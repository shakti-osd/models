import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
  <div className='card-list'>
    {props.models.map(model => (
      <Card key={model.id} model={model} />
    ))}
  </div>
);
