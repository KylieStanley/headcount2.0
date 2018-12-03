import React from 'react';
import Card from '../Card/Card'
import CompareCard from '../CompareCard/CompareCard'
import './CompareContainer.css'
import PropTypes from 'prop-types';


const CompareContainer = ({ selectedCards, compareDistrictAverages, selectCard }) => {

  let selected = selectedCards.map((district, i) => {
                  return <Card district={district} key={i} selectedCards={selectedCards} selectCard={selectCard}/>
                 })

  if (selectedCards.length === 2) {
    var district1 = selectedCards[0].location;
    var district2 = selectedCards[1].location;

    var comparedDistricts = compareDistrictAverages(district1, district2);
  }

  selected.splice(1, 0, <CompareCard selectedCards={selectedCards} district1={district1} 
                                     district2={district2} comparedDistricts={comparedDistricts} key={3}/>)

  return (
    <div className="compare-container">
      { selected }
    </div>
  );
}

CompareContainer.propTypes = {
  selectedCards: PropTypes.array.isRequired,
  compareDistrictAverages: PropTypes.func.isRequired
}

export default CompareContainer;
