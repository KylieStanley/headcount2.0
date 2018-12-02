import React from 'react';
import CompareCard from './CompareCard.js';
import {shallow, mount} from 'enzyme';

describe('CompareCard', () => {
  it('should match the snapshot with data passed in correctly', () => {
    const wrapper = shallow( <CompareCard 
      selectedCards={[{location: "COLORADO SPRINGS",
                       stats: {2005: .4}
                      },
                      {location: "COLORADO",
                       stats: {2006: .4}
                      }]} 
      district1='COLORADO' 
      district2='COLORADO SPRINGS'
      comparedDistricts={1} 
      key={3}
    />)

    expect(wrapper).toMatchSnapshot();
  })
})