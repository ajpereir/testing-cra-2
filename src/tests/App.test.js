import React from 'react';
import { shallow } from 'enzyme';

import App from '../containers/App';

describe('<App/>', () => {
  it('renders main div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(<div className="App" />));
  });

  it('has text "Tests"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text()).to.equal('Tests');
  });
});
