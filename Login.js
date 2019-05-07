import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';


export default class Login extends React.Component {

    state = {
        email: '',
        password: '',
        isLogined: false
    }

    handleUsernameChange = (text) => {
        this.setState({
            email: text
        })
    }
    handlePasswordChange = (text) => {
        this.setState({
            password: text
        })
    }

    sumOfNumber = (a, b) => {
        return a + b;
    }

    onSubmit = () => {

        if (this.state.email === 'amanpreet@gmail.com' && this.state.password === '123456') {
            this.setState({ isLogined: true })
        }
    }

    render() {
        return (
            <View>
                <TextInput
                    testID={'login-email'}
                    placeholder={'Username'}
                    onChangeText={this.handleUsernameChange}
                />
                <TextInput
                    testID={'login-password'}
                    placeholder={'Password'}
                    onChangeText={this.handlePasswordChange}
                />
                <TouchableOpacity testID={'submit'} onPress={this.onSubmit}>
                    <Text>Sumbit</Text>
                </TouchableOpacity>

            </View >
        );
    }


}