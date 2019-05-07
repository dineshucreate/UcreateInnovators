import React from 'react';
import { shallow } from 'enzyme';
import 'react-native';
import Login from '../Login';
import toJson from 'enzyme-to-json';



describe('Login Flow', () => {
    let wrapper = shallow(<Login />);

    let email = 'amanpreet@gmail.com';
    let password = '123456';

    it('create snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // it('email check', () => {
    //     wrapper.find("[testID='login-email']").simulate('ChangeText', 'aman@gmail.com');
    //     stateEmail = wrapper.state('email');
    //     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     expect(stateEmail).not.toEqual('');
    //     expect(stateEmail).toMatch(mailformat);
    //     //  expect(stateEmail).toEqual(email);
    // })

    // it('password check', () => {
    //     wrapper.find("[testID='login-password']").simulate('ChangeText', password);
    //     expect(wrapper.state('password')).not.toEqual('');
    //     expect(wrapper.state('password')).toBeString();
    //     expect(wrapper.state('password')).toEqual(password);
    // })

    // it('login check with right data', () => {
    //     wrapper.find("[testID='submit']").simulate('press');
    //     expect(wrapper.state('isLogined')).toBe(true);
    // })

    it('Sum of two numbers', () => {
        let instance = wrapper.instance();
        expect(instance.sumOfNumber(2, 3)).toBe(5);
    });
});