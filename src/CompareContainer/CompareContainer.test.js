import React from 'react';
import CompareContainer from './CompareContainer.js';
import {shallow, mount} from 'enzyme';

describe('CompareContainer', () => {
  it('should match the snapshot with data passed in correctly', () => {
    const wrapper = shallow( <CompareContainer 
      selectedCards={[{location: "COLORADO SPRINGS",
                       stats: {2005: .4}
                      }]}
      compareDistrictAverages={jest.fn()}
    />)

    expect(wrapper).toMatchSnapshot();
  })
})