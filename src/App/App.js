import React, { Component } from 'react';
import './App.css';
import DistrictRepository from '../helper';
import CardContainer from '../CardContainer/CardContainer';
import Search from '../Search/Search';
import kinderData from '../data/kindergartners_in_full_day_program.js';


class App extends Component {
  constructor() {
    super()

    this.kinderData = new DistrictRepository(kinderData)

    this.state = {
      data: this.kinderData.findAllMatches(),
      selectedCards: []
    }
  }

  matchCards = (district) => {
    const matches = this.kinderData.findAllMatches(district)
    this.setState({
      data: matches
    })
    
  }

  selectCard = (district) => {
    let { selectedCards } = this.state

    if (!selectedCards.length || selectedCards.length === 2) {
      selectedCards = [district]
    } else if (selectedCards.length === 1 && !selectedCards.includes(district)) {
      selectedCards = [...selectedCards, district]
    }

    this.setState({
      selectedCards
    }) 
  }


  render() {
    const { data, selectedCards } = this.state;
    return (
      <div className="main">
        <h1>HeadCount 2.0</h1>
        <Search data={this.kinderData} matchCards={this.matchCards}/>
        <CardContainer data={data} selectCard={this.selectCard} selectedCards={selectedCards} 
                       compareDistrictAverages={this.kinderData.compareDistrictAverages} />
      </div>
    );
  }
}

export default App;
