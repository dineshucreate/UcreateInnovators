import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, Text, TextInput, View } from 'react-native';
import styles from './style';

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (
            <ImageBackground style={styles.backgroundImage} source={require('../../assets/images/background.png')}>
                <TouchableOpacity style={styles.backButton}>
                    <Image style={styles.backImage} source={require('../../assets/images/back.png')} />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
                <Image style={styles.logoImage} source={require('../../assets/images/logoWhite.png')} />
                <TouchableOpacity style={styles.facebookButton}>
                    <Image style={styles.facebookIcon} source={require('../../assets/images/FbIcon.png')} />
                    <Text style={styles.facbookText}>LOG IN WITH FACEBOOK</Text>
                </TouchableOpacity>
                <View style={styles.loginView}>
                    <TextInput style={styles.emailTextInput}
                        placeholder="email address"
                        onChangeText={(text) => this.setState({ text })} />
                    <View style={styles.lineView} />
                    <TextInput style={styles.emailTextInput}
                        placeholder="password"
                        onChangeText={(text) => this.setState({ text })} />
                    <View style={styles.lineView} />
                    <TouchableOpacity onPress={this._onPressButton}>
                        <Text style={styles.buttonForgotText}>Forgot your password</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.loginButton}
                    onPress={this._onPressButton}>
                    <Text style={styles.buttonLoginText}>LOG IN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressButton}>
                    <Text style={styles.createAccountText}>CREATE AN ACCOUNT</Text>
                </TouchableOpacity>
            </ImageBackground >
        );
    }
}