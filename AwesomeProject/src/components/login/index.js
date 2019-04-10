import React, { Component } from 'react';
import { Image, View, SafeAreaView, Text, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, StatusBar, Keyboard, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import styles from './style'
const height = Dimensions.get("window").height;

export default class login extends Component {

    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }
    _onPressButton = () => {
        const { navigation } = this.props
        navigation.navigate('signUp');
        this.setState({
            count: this.state.count + 1
        })
        console.log('Hey I am button');
    }

    static navigationOptions = {
        title: 'Login'
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='light-content'></StatusBar>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <ScrollView>
                            < View style={[styles.container, { height: height, marginTop: 100 }]}>
                                <View style={styles.logoContainer}>
                                    <Image source={require('../../assets/0.gif')} style={styles.logo}></Image>
                                </View>
                                <View style={styles.infoContainer}>
                                    <TextInput style={styles.input}
                                        placeholder="Enter username/email"
                                        placeholderTextColor='rgba(255, 255, 255, 0.8)'
                                        keyboardType='email-address'
                                        returnKeyType='next'
                                        autoCorrect={false}
                                        onSubmitEditing={() => this.refs.txtPassword}
                                    >
                                    </TextInput>
                                    <TextInput style={styles.input}
                                        placeholder="password"
                                        placeholderTextColor='rgba(255, 255, 255, 0.8)'
                                        keyboardType='email-address'
                                        returnKeyType='go'
                                        secureTextEntry={true}
                                        ref={'txtPassword'}
                                    >
                                    </TextInput>
                                    <TouchableOpacity style={styles.buttonContainer}
                                        onPress={this._onPressButton}>
                                        <Text style={styles.buttonText}>SIGN IN</Text>
                                    </TouchableOpacity>
                                    <Text style={[styles.countText]}>
                                        {this.state.count !== 0 ? this.state.count : null}
                                    </Text>
                                </View>
                            </View>
                        </ScrollView>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}