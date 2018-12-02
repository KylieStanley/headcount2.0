import React from 'react';
// import Data from '../data/kindergartners_in_full_day_program.js';
import Card from '../Card/Card.js';
import CardContainer from './CardContainer.js';
import {shallow, mount} from 'enzyme';


describe('CardContainer', () => {

  let wrapper;
  let mockSelectCard;

  beforeEach(() => {
    mockSelectCard = jest.fn();
    wrapper = mount( <CardContainer 
      data={[{location: "COLORADO",
              stats: {2004: .5}
            },{location: "COLORADO",
              stats: {2005: .5}
            }]}
      selectCard={mockSelectCard}
      selectedCards={[{location: "COLORADO SPRINGS",
                       stats: {2005: .4}
                      }]}
    />);
  });

  it('should match the snapshot with data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should return an array of cards', () => {
    expect(wrapper.find(Card).length).toBe(2)
  });
});