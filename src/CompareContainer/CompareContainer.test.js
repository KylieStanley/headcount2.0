import React from 'react';
import CompareContainer from './CompareContainer.js';
import {shallow, mount} from 'enzyme';

describe('CompareContainer', () => {

  let wrapper;
  let mockCompareAvg;
  let mockData;

  beforeEach(() => {
    mockCompareAvg = jest.fn();
    mockData = [{location: "COLORADO SPRINGS", stats: {2005: .4}}]
    wrapper = shallow( <CompareContainer 
      selectedCards={mockData}
      compareDistrictAverages={mockCompareAvg}
    />)
  });

  it('should match the snapshot with data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should compare two districts if there are two selected cards', () => {
    mockData = [{location: "COLORADO SPRINGS", stats: {2005: .4}},
                 {location: "COLORADO", stats: {2006: .4}}]
    wrapper = shallow( <CompareContainer 
      selectedCards={mockData}
      compareDistrictAverages={mockCompareAvg}
    />)

    expect(mockCompareAvg).toBeCalledWith('COLORADO SPRINGS', 'COLORADO')
  });

  it('should should not run a comparison if there are not two cards selected', () => {
    expect(mockCompareAvg).not.toHaveBeenCalled()
  });
});
