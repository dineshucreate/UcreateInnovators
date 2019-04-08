import React, { Component } from 'react';
import { StyleSheet, Image, View, SafeAreaView, Text, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, StatusBar, Keyboard, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
const height = Dimensions.get("window").height;
export default class Login extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='light-content'>
                </StatusBar>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress = {Keyboard.dismiss}>
                    <ScrollView>
                        < View style={[styles.container, {height: height, marginTop: 100}]}>
                            <View style={styles.logoContainer}>
                                <Image source={require('../assets/0.gif')} style={styles.logo}></Image>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
        flex: 0.2,
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        alignItems: 'center',
        color: '#f7c744',
        fontSize: 18,
        marginTop: 15,
        opacity: 0.5,
    },
    infoContainer: {
        flex: 0.4,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonContainer:{
        backgroundColor: '#f7c744',
        paddingVertical: 15,
    }, 
    buttonText:{
        textAlign: 'center',
        color: 'rgb(32, 53, 70)',
        fontSize: 18,
        fontWeight: 'bold',
    }
})