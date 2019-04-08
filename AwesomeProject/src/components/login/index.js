import React, { Component } from 'react';
import { Image, View, SafeAreaView, Text, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, StatusBar, Keyboard, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import styles from './style'
const height = Dimensions.get("window").height;
export default class login extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='light-content'></StatusBar>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress = {Keyboard.dismiss}>
                    <ScrollView>
                        < View style={[styles.container, {height: height, marginTop: 100}]}>
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
                                    onSubmitEditing = {()=> this.refs.txtPassword}
                                >
                                </TextInput>
                                <TextInput style={styles.input}
                                    placeholder="password"
                                    placeholderTextColor='rgba(255, 255, 255, 0.8)'
                                    keyboardType='email-address'
                                    returnKeyType='go'
                                    secureTextEntry = {true}
                                    ref = {'txtPassword'}
                                >
                                </TextInput>
                                <TouchableOpacity style = { styles.buttonContainer}>
                                <Text style = {styles.buttonText}>SIGN IN</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        </ScrollView>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}