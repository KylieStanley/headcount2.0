import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css'

const CardContainer = ({ data, selectCard, selectedCards, compareDistrictAverages }) => {

  const allCards = data.map((district, i) => {
                  return <Card district={district} key={i} selectCard={selectCard}/>
                })
  let selected = selectedCards.map((district, i) => {
                     return <Card district={district} key={i} selectCard={selectCard}/>
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
    <div className="card-container">
      <div className='compare'>
        { selected }
      </div>
      <div className='all-cards'>
        { allCards }
      </div>
    </div>
  );
}

export default CardContainer;
