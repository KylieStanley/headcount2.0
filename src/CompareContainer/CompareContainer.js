import React from 'react';
import Card from '../Card/Card'
import CompareCard from '../CompareCard/CompareCard'
import BlankCard from '../BlankCard/BlankCard'
import './CompareContainer.css'
import PropTypes from 'prop-types';


const CompareContainer = ({ selectedCards, compareDistrictAverages, selectCard }) => {
  let selected = [<BlankCard key={0}/>,
                 <BlankCard key={1}/>]

  if (selectedCards.length === 1) {
    selected = [<Card district={selectedCards[0]} selectedCards={selectedCards} selectCard={selectCard} key={selectedCards[0].location}/>,
                <BlankCard key={0}/>]
  } else if (selectedCards.length === 2) {
    var district1 = selectedCards[0].location;
    var district2 = selectedCards[1].location;
    var comparedDistricts = compareDistrictAverages(district1, district2);
    
    selected = selectedCards.map((district) => {
      return <Card district={district} key={district.location} selectedCards={selectedCards} selectCard={selectCard}/>
    })
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
