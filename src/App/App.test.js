import React from 'react';
import ReactDOM from 'react-dom';
import Data from '../data/kindergartners_in_full_day_program.js';
import App from './App';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('has 181 items in the intial data state', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().data.length).toBe(181);
});

it('has an empty array in the intial selectedCards state', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().selectedCards.length).toBe(0);
})

it('should update the data state when cards are matched on search', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().data.length).toBe(181);

  wrapper.instance().matchCards('Colorado');
  expect(wrapper.state().data.length).toBe(2);
})

it('if selectedCards array is empty, calling selectCard will add the district', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().selectedCards.length).toBe(0);

  wrapper.instance().selectCard('district1');
  expect(wrapper.state().selectedCards.length).toBe(1);
})

it('if selectedCards array has one item, calling selectCard will add a second district', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().selectedCards.length).toBe(0);

  wrapper.instance().selectCard('district1');
  expect(wrapper.state().selectedCards.length).toBe(1);

  wrapper.instance().selectCard('district2');
  expect(wrapper.state().selectedCards.length).toBe(2);
})

it('if selectedCards array has two items, calling selectCard will not add any new cards', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().selectedCards.length).toBe(0);

  wrapper.instance().selectCard('district1');
  wrapper.instance().selectCard('district2');
  wrapper.instance().selectCard('district3');
  expect(wrapper.state().selectedCards.length).toBe(2);
})
