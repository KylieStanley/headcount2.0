import React from 'react';
import './CompareCard.css'
import PropTypes from 'prop-types';


const CompareCard = ({ selectedCards, comparedDistricts, district1, district2 }) => {
 
  if (selectedCards.length === 2) {
    var compared = 
      <div className="card compare">
        <h3>{ district1 } : { comparedDistricts[district1] } </h3>
        <h3><i className="fas fa-arrow-left"></i> { comparedDistricts.compared } <i className="fas fa-arrow-right"></i></h3>
        <h3>{ district2 } : { comparedDistricts[district2] } </h3>
      </div> 
  }

   const waitingToCompare = <div className="card compare">
                              <h3>Choose Two Districts to Compare!</h3>
                            </div>

  return (
    compared ? compared : waitingToCompare 
  )
}

CompareCard.propTypes = {
  selectedCards: PropTypes.array.isRequired,
  comparedDistricts: PropTypes.object,
  district1: PropTypes.string,
  district2: PropTypes.string
}

export default CompareCard;
