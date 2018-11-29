import React from 'react';
import Data from './data/kindergartners_in_full_day_program.js';
import Card from './Card.js';
import {shallow} from 'enzyme';


describe('Card', () => {
  it('should match the snapshot with data passed in correctly', () => {
    const wrapper = shallow( <Card
      district={{location: "COLORADO",
                  stats: {2004: .5}
                }}
    />);

    expect(wrapper).toMatchSnapshot();
  })

  it('should have a class of less-than', () => {
    const wrapper = shallow( <Card 
      district={{location: "COLORADO",
                  stats: {2004: 0.24}
                }}
    />);

    expect(wrapper.find('li').hasClass('less-than'));
  });

  it('should have a class of greater-than', () => {
    const wrapper = shallow( <Card 
      district={{location: "COLORADO",
                  stats: {2004: 0.54}
                }}
    />);
    
    expect(wrapper.find('li').hasClass('greater-than'));
  });
});