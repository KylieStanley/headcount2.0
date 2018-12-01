import React from 'react';
import SelectedDistrict from '../SelectedDistrict/SelectedDistrict'
import './CompareContainer.css'

const CompareContainer = ({ selectedCards, compareDistrictAverages }) => {
    
  let selected = selectedCards.map((district, i) => {
                  return <SelectedDistrict district={district} key={i} />
                 })

  if (selectedCards.length === 2) {
    const district1 = selectedCards[0].location
    const district2 = selectedCards[1].location

    const comparedDistricts = compareDistrictAverages(district1, district2)
    
    const compareCard = 
      <div className="card">
        <h3>{ district1 } : { comparedDistricts[district1] } </h3>
        <h3>&lt;--- { comparedDistricts.compared } ---></h3>
        <h3>{ district2 } : { comparedDistricts[district2] } </h3>
      </div>
    
    selected.splice(1, 0, compareCard)
  }

  return (
    <div className="compare-container">
      { selected }
    </div>
  );
}


export default CompareContainer;
