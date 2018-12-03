import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';


const Card = ({ selectCard, district, selectedCards }) => {
  let selectedStyle = selectedCards.includes(district) ? 'card selected' : 'card'
  
  return (
    <div className={selectedStyle} 
         onClick={selectCard.bind(null, district)}>
      <h2>{district.location}</h2>
      <ul>
      {
        Object.keys(district.stats).map((item, i) => {
          let style = district.stats[item] >= .5 ? 'greater-than' : 'less-than';
          return <li className={style} key={item}>{item}: {district.stats[item]}</li>
        })
      }
      </ul>
    </div>
  );
}

Card.propTypes = {
  district: PropTypes.object.isRequired,
  selectCard: PropTypes.func,
  selectedCards: PropTypes.array.isRequired
}

export default Card;
