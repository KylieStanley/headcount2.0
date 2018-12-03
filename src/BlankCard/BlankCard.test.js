import React from 'react';
import BlankCard from './BlankCard.js';
import {shallow, mount} from 'enzyme';

describe('BlankCard', () => {
  it('should match the snapshot with data passed in correctly', () => {
    const wrapper = shallow( <BlankCard />)

    expect(wrapper).toMatchSnapshot();
  })
})