import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css'

const CardContainer = (props) => {
  
    return (
      <div className="card-container">
        {
          props.data.map((district, i) => {
            return <Card district={district} key={i} />
          })
        }
      </div>
    );
  }

export default CardContainer;
