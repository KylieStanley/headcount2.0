import React from 'react';
import Data from '../data/kindergartners_in_full_day_program.js';
import Card from '../Card/Card.js';
import CardContainer from './CardContainer.js';
import {shallow, mount} from 'enzyme';


describe('CardContainer', () => {
  it('should match the snapshot with data passed in correctly', () => {
    const wrapper = shallow( <CardContainer 
      data={[{location: "COLORADO",
              stats: {2005: .5}
            }]}
      selectCard={jest.fn()}
      selectedCards={[{location: "COLORADO SPRINGS",
                       stats: {2005: .4}
                      }] }
      compareDistrictAverages={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should return an array of cards', () => {
    const wrapper = mount( <CardContainer 
      data={[{location: "COLORADO",
              stats: {2004: .5}
            },{location: "COLORADO",
              stats: {2005: .5}
            }]}
      selectCard={jest.fn()}
      selectedCards={[{location: "COLORADO SPRINGS",
                       stats: {2005: .4}
                      }] }
      compareDistrictAverages={jest.fn()}
    />);

    expect(wrapper.find(Card).length).toBe(3)
  })
});