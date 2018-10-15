/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';

import App from '../containers/App';

describe('<App/>', () => {
  const wrapper = shallow(<App />);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('contains classname="App"', () => {
    expect(wrapper.find(<div className="App" />));
  });

  // it('has text "Tests"', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.text()).to.equal('Tests');
  // });
});
