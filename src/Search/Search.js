import React, { Component } from 'react';
import './Search.css'
import PropTypes from 'prop-types';


class Search extends Component {
  constructor() {
    super()
    this.state = {
      district: ''
    }
  }

  handleSearch = (e) => {
    this.setState({
      district: e.target.value
      }, () => this.props.matchCards(this.state.district)
    )
  }

  render() {
    return (
      <div className="search">
        <input type="text" placeholder="&#xf002; Search by District" value={this.state.district} onChange={this.handleSearch}></input>
      </div>
    );
  }
}

Search.propTypes = {
  matchCards: PropTypes.func.isRequired
}


export default Search;
