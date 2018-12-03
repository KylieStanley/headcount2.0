import React, { Component } from 'react';
import './App.css';
import DistrictRepository from '../helper';
import CardContainer from '../CardContainer/CardContainer';
import CompareContainer from '../CompareContainer/CompareContainer';
import Search from '../Search/Search';
import kinderData from '../data/kindergartners_in_full_day_program.js';


class App extends Component {
  constructor() {
    super()

    this.kinderData = new DistrictRepository(kinderData)

    this.state = {
      data: [],
      selectedCards: []
    }
  }

  componentDidMount() {
    this.setState({
      data: this.kinderData.findAllMatches()
    })
  }

  filterCards = (district) => {
    const matches = this.kinderData.findAllMatches(district)
    this.setState({
      data: matches
    })
  }

  selectCard = (district) => {
    let { selectedCards } = this.state

    switch(true) {
      case selectedCards.includes(district):
        selectedCards = selectedCards.filter(card => card !== district);
        break;
      case !selectedCards.length:
        selectedCards = [district];
        break;
      case (selectedCards.length === 1):
        selectedCards = [...selectedCards, district];
        break;
      default:
        selectedCards;
    }

    this.setState({
      selectedCards
    }) 
  }

  render() {
    const { data, selectedCards } = this.state;
    return (
      <div className="main">
        <header>
          <h1>HeadCount 2.0</h1>
        </header>
        <Search filterCards={this.filterCards}/>
        <CompareContainer 
          selectedCards={selectedCards} 
          compareDistrictAverages={this.kinderData.compareDistrictAverages} 
          selectCard={this.selectCard}
        />
        <CardContainer 
          data={data} 
          selectCard={this.selectCard} 
          selectedCards={selectedCards}
        />
      </div>
    );
  }
}

export default App;
