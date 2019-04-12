import React, { Component } from 'react';
import { Image, TouchableOpacity, Text, TextInput, View, ScrollView } from 'react-native';
import styles from './style';
import BackButton from '../../component/backButton';
import BackgroundImage from '../../component/backgroundImage';

export default class login extends Component {
    backPress = (() => {
        const { navigation } = this.props;
        navigation.pop();
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
                                onChangeText={(text) => this.setState({ text })} />
                            <View style={styles.lineView} />
                            <TextInput style={styles.textInput}
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
                    </View>
                </ScrollView>
            </BackgroundImage >
        );
    }
}
