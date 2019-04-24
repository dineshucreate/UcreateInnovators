import React from 'react';
import TestComponent from '../TestComponent';
import { shallow } from 'enzyme';
import 'react-native';
import 'react-test-renderer';
import toJson from 'enzyme-to-json';

describe('App Snapshot', () => {
    const app = shallow(<TestComponent />);
    const wrapper = shallow(<TestComponent />).instance();
    // it('rendering ', () => {
    //     expect(toJson(app)).toMatchSnapshot();
    // });

    // it('checking Validate function using Mock function', () => {
    //     const validateInputs = jest.fn((username, password) => {
    //         if (username.length === 0) return false
    //         else if (password.length === 0) return false
    //         else return true;
    //     });
    //     expect(validateInputs('abcd', '123')).toBe(true);

    // });

    // it('checking sum function using Mock function', () => {
    //     const sum = jest.fn((x, y) => x + y);
    //     expect(sum(2, 3)).toBe(5);
    //     expect(sum).toBeDefined();
    //     expect(sum).toHaveBeenCalledWith(2, 3)

    // });

});

describe('sum suite', () => {
    it('Should add 2 positive numbers together and return the result', () => {
        const wrapper = shallow(<TestComponent />).instance();
        expect(wrapper.sum(2, 3)).toBe(5);
    });
});