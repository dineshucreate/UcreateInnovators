import React from 'react';
import TestComponent from '../TestComponent';
import { shallow } from 'enzyme';
import 'react-native';
import 'react-test-renderer';
import toJson from 'enzyme-to-json';

describe('App Snapshot', () => {
    const app = shallow(<TestComponent />)
    it('rendering ', () => {
        expect(toJson(app)).toMatchSnapshot();
    });

});

describe('sum suite', () => {
    test('Should add 2 positive numbers together and return the result', () => {
        const wrapper = shallow(<TestComponent />).instance();
        expect(wrapper.sum(2, 3)).toBe(5);
    });
});