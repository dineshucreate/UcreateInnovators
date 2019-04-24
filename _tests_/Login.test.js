import React from 'react';
import { shallow } from 'enzyme';
import 'react-native';
import Login from '../Login';

describe('Login Component', () => {
    let wrapper = shallow(<Login />);

    let email = 'amanpreet@gmail.com';
    let password = '123456';

    it('username check', () => {

        wrapper.find("[testID='login-email']").simulate('ChangeText', email);
        stateEmail = wrapper.state('username');
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        expect(stateEmail).not.toEqual('');
        expect(stateEmail).toMatch(mailformat);
        expect(stateEmail).toEqual(email);

    })
    it('password check', () => {
        wrapper.find("[testID='login-password']").simulate('ChangeText', password);
        expect(wrapper.state('password')).not.toEqual('');
        expect(wrapper.state('password')).toEqual(password);
    })

    it('login check with right data', () => {
        wrapper.find("[testID='submit']").simulate('press');
        expect(wrapper.state('isLogined')).toBe(true);
    })
});