import React from 'react';
import Data from '../data/kindergartners_in_full_day_program.js';
import Card from './Card.js';
import {shallow} from 'enzyme';


describe('Card', () => {

  let wrapper;
  let mockselectCard;
  let mockData;

  beforeEach(() => {
    mockselectCard = jest.fn()
    mockData = {location: "COLORADO",
                stats: {2004: .5,
                        2005: .4}}
    wrapper = shallow( <Card
      selectCard={mockselectCard}
      district={mockData}
      selectedCards={[mockData]}
    />);
  });

  it('should match the snapshot with data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('stat should have a class of less-than when lower than .5', () => {

    expect(wrapper.find('li').at(1).hasClass('less-than')).toBe(true);
  });

  it('stat should have a class of greater-than when equal to or greater than .5', () => {
    
    expect(wrapper.find('li').at(0).hasClass('greater-than')).toBe(true);
  });

  it('should have a class of selected when the card is chosen', () => {
    expect(wrapper.find('div').hasClass('selected')).toBe(true);
  });

  it('should only have a class of card when the card is not chosen', () => {
    wrapper = shallow( <Card
      selectCard={mockselectCard}
      district={{location: "Academy",stats: {2004: .5}}}
      selectedCards={[mockData]}
    />);
    expect(wrapper.find('div').hasClass('card')).toBe(true);
    expect(wrapper.find('div').hasClass('selected')).toBe(false);
  });

  it('selectCard should be called when a card is clicked', () => {
    wrapper.find('.card').simulate('click');
    expect(mockselectCard).toBeCalled();
  });
});