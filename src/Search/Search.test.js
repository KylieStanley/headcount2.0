import React from 'react';
import Data from '../data/kindergartners_in_full_day_program.js';
import Search from './Search.js';
import {shallow, mount} from 'enzyme';

describe('Search', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Search 
      data={[]} 
      matchCards={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  })

  it('simulates text change in input box',() => {
    const mockData = { target: {value: 'Colorado'}}
    const wrapper = mount(<Search 
      data={[]} 
      matchCards={jest.fn()}
    />);

    const input = wrapper.find('input');
    const handleSearchSpy = jest.spyOn(wrapper.instance(), 'handleSearch')

    wrapper.instance().forceUpdate();
    input.simulate('change', mockData)

    expect(handleSearchSpy).toBeCalled()
  })

})