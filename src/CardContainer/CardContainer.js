import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css'
import PropTypes from 'prop-types';


const CardContainer = ({ data, selectCard, selectedCards }) => {

  const allCards = data.map((district, i) => {
                  return <Card district={district} key={district.location} selectCard={selectCard} selectedCards={selectedCards}/>
                })

  return (
    <div className="card-container">
        { allCards }
    </div>
  );
}

CardContainer.propTypes = {
  data: PropTypes.array.isRequired,
  selectCard: PropTypes.func.isRequired,
  selectedCards: PropTypes.array.isRequired
}

export default CardContainer;