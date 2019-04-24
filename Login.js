import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';


export default class Login extends React.Component {

    state = {
        username: '',
        password: '',
        isLogined: false
    }

    handleUsernameChange = (text) => {
        this.setState({
            username: text
        })
    }
    handlePasswordChange = (text) => {
        this.setState({
            password: text
        })
    }

    onSubmit = () => {

        if (this.state.username === 'amanpreet@gmail.com' && this.state.password === '123456') {
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
                    <Text>Submit</Text>
                </TouchableOpacity>

            </View >
        );
    }


}