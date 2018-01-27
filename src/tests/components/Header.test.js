
import { shallow } from 'enzyme';
import React from 'react';

import Header from '../../components/Header';

test('should render header correctly', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h1').text()).toBe('Code Exercise for JS/React Developer');

    expect(wrapper).toMatchSnapshot();
});