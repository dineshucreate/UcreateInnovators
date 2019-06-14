import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import OAuthManager from 'react-native-oauth';

let manager = null;
let scopes = '';
export default class Login extends React.Component {

    constructor() {
        super();
        manager = new OAuthManager('SamplesReact')
        manager.configure({

            google: {
                callback_url: `http://localhost/google`,
                client_id: '456999668434-k5k3fsskg1hok3dvhc6hgpdihonn8dac.apps.googleusercontent.com',
                client_secret: '2hpjmtzVgIuMSQ4e_gwoq7oA',
                rawScopes: 'true'
            }
        });
        scopes = 'profile'
    }

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

        // if (this.state.email === 'amanpreet@gmail.com' && this.state.password === '123456') {
        //     this.setState({ isLogined: true })
        // }
        manager.authorize('google', { scopes })
            .then(resp => console.log('Your users ID ' + JSON.stringify(resp)))
            .catch(err => console.log('There was an error  ' + err));
    }

    getUserinfo = () => {

        const googleUrl = 'https://www.googleapis.com/plus/v1/people/me';
        manager
            .makeRequest('google', googleUrl)
            .then(resp => {
                console.log('Data -> ', resp.data);
            });
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
                <TouchableOpacity testID={'submitt'} onPress={this.getUserinfo}>
                    <Text>Userinfo</Text>
                </TouchableOpacity>

            </View >
        );
    }


}