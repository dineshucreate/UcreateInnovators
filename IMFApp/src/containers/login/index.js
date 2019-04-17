import React, { Component } from 'react';
import { Image, TouchableOpacity, Text, TextInput, View, ScrollView, ActivityIndicator } from 'react-native';
import styles from './style';
import BackButton from '../../component/backButton';
import BackgroundImage from '../../component/backgroundImage';
import User from '../../utilities/models/user'
export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            TotalValue: '',
            loading: false
        }
    }
    backPress = (() => {
        const { navigation } = this.props;
        navigation.pop();
    });
    LoginPress = (() => {
        this.setState({ loading: true });
        let user = new User(null)
        user.loginUser(this.state.email, this.state.password, (response) => {
            this.setState({ loading: false });
            // console.log(JSON.stringify(response))
            // alert('Username: ' + (response.data.user.firstname) + ' ' + (response.data.user.lastName))
            const { navigation } = this.props;
            navigation.navigate('home');
        }, (error) => {
            this.setState({ loading: false });
            alert('Please enter valid credentials')
        })
    });
    render() {
        return (
            <BackgroundImage>
                <BackButton name={'Back'} backPress={this.backPress} />
                <ScrollView contentContainerStyle={styles.backgroundView}>
                    <View style={styles.backgroundView}>
                        <Image style={styles.logoImage} source={require('../../assets/images/logoWhite.png')} />
                        <TouchableOpacity style={styles.facebookButton}>
                            <Image style={styles.facebookIcon} source={require('../../assets/images/FbIcon.png')} />
                            <Text style={styles.facbookText}>LOG IN WITH FACEBOOK</Text>
                        </TouchableOpacity>
                        <View style={styles.loginView}>
                            <TextInput style={styles.textInput}
                                placeholder="email address"
                                onChangeText={(text) => this.setState({ email: text })} />
                            <View style={styles.lineView} />
                            <TextInput style={styles.textInput}
                                secureTextEntry={true}
                                placeholder="password"
                                onChangeText={(text) => this.setState({ password: text })} />
                            <View style={styles.lineView} />
                            <TouchableOpacity onPress={this._onPressButton}>
                                <Text style={styles.buttonForgotText}>Forgot your password</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.loginButton}
                            onPress={this.LoginPress}>
                            <Text style={styles.buttonLoginText}>LOG IN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._onPressButton}>
                            <Text style={styles.createAccountText}>CREATE AN ACCOUNT</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                {this.state.loading ?
                    <View style={{ width: '100%', height: '100%', position: 'absolute', justifyContent: 'center' }}>
                        <ActivityIndicator style={{ alignSelf: 'center' }} size='large' />
                    </View> : null
                }
            </BackgroundImage >
        );
    }
}
