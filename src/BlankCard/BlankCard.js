import React from 'react';
import './BlankCard.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faAppleAlt)

const BlankCard = () => {

  return (
    <div className="card blank">
      <h3>Select a School District</h3>
      <FontAwesomeIcon icon="apple-alt"/>
    </div>
  )
}

export default BlankCard;
