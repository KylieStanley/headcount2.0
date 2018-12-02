import React from 'react';
import './CompareCard.css'


const CompareCard = ({ selectedCards, comparedDistricts, district1, district2 }) => {
 
  if (selectedCards.length === 2) {
    var compared = 
      <div className="card compare">
        <h3>{ district1 } : { comparedDistricts[district1] } </h3>
        <h3>&lt;--- { comparedDistricts.compared } ---></h3>
        <h3>{ district2 } : { comparedDistricts[district2] } </h3>
      </div> 
  }

   const waitingToCompare = <div className="card compare">Choose Two Districts to Compare!</div>

  return (
    compared ? compared : waitingToCompare 
  )
}

export default CompareCard;
