import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css'

const CardContainer = ({ data, selectCard, selectedCards }) => {

  const allCards = data.map((district, i) => {
                  return <Card district={district} key={i} selectCard={selectCard} selectedCards={selectedCards}/>
                })

  return (
    <div className="card-container">
        { allCards }
    </div>
  );
}

export default CardContainer;
