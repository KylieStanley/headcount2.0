import React from 'react';
import Data from './data/kindergartners_in_full_day_program.js';
import CardContainer from './CardContainer.js';
import {shallow} from 'enzyme';

describe('CardContainer', () => {
  it('should match the snapshot with data passed in correctly', () => {
    const wrapper = shallow( <CardContainer 
      data={[{location: "COLORADO",
              stats: {2004: .5}
            }]}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});