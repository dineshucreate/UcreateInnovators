import React, { Component } from 'react';
import { Image, View, SafeAreaView, Text, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, StatusBar, Keyboard, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import signUpStyles from './style'
const height = Dimensions.get("window").height;
export default class signup extends Component {
    render() {
        return (
            <SafeAreaView style={signUpStyles.container}>
                <StatusBar barStyle='light-content'></StatusBar>
                <KeyboardAvoidingView behavior='padding' style={signUpStyles.container}>
                    <TouchableWithoutFeedback style={signUpStyles.container} onPress={Keyboard.dismiss}>
                        <View style={[signUpStyles.container]}>
                            <View style={signUpStyles.uppperView}>
                            </View>
                            <View style={signUpStyles.infoContainer}>
                                <Text style={signUpStyles.title}>SIGN UP</Text>
                                <View style = {signUpStyles.textContainer}>
                                    <TextInput style={signUpStyles.input}
                                        placeholder="Enter username/email"
                                        keyboardType='email-address'
                                        returnKeyType='next'
                                        autoCorrect={false}
                                        onSubmitEditing={() => this.refs.txtPassword}
                                    >
                                    </TextInput>
                                    <TextInput style={signUpStyles.input}
                                        placeholder="password"
                                        secureTextEntry={true}
                                        ref={'txtPassword'}
                                    >
                                    </TextInput>
                                    <TextInput style={signUpStyles.input}
                                        placeholder="confirm password"
                                        returnKeyType='go'
                                        secureTextEntry={true}
                                        ref={'txtPassword'}
                                    >
                                    </TextInput>
                                    <TouchableOpacity style={signUpStyles.buttonContainer}>
                                        <Text style={signUpStyles.buttonText}>SUBMIT</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}