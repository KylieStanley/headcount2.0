import React from 'react';
import Data from '../data/kindergartners_in_full_day_program.js';
import Search from './Search.js';
import {shallow, mount} from 'enzyme';

describe('Search', () => {
  let wrapper;
  let mockMatchCards;

  beforeEach(() => {
    mockMatchCards = jest.fn()
    wrapper = mount(<Search 
      data={[]} 
      matchCards={mockMatchCards}
    />);
  });

  it('should match the snapshot with correct data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('simulates text change in input box',() => {
    const mockData = { target: {value: 'Colorado'}}

    const input = wrapper.find('input');
    const handleSearchSpy = jest.spyOn(wrapper.instance(), 'handleSearch')

    wrapper.instance().forceUpdate();
    input.simulate('change', mockData);

    expect(handleSearchSpy).toBeCalled()
  });
});