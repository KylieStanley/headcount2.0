import React from 'react';
import './Card.css';

const Card = (props) => {


    return (
      <div className="card">
        <h2>{props.district.location}</h2>
        <ul>
        {
          Object.keys(props.district.stats).map((item, i) => {
            let style = props.district.stats[item] > .5 ? 'greater-than' : 'less-than';
            return <li className={style} key={i}>{item}: {props.district.stats[item]}</li>
          })
        }
        </ul>
      </div>
    );
  }


export default Card;
