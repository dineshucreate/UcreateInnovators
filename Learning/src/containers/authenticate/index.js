import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { backgroundImage, fbIcon, logoWhite, backButton } from '../../assets/images/images'
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import {emptyRegex, nameReg, emailReg, passwordReg, phoneReg} from '../../Utilities/Regex/Regex'
import {LoginErrors} from '../../Utilities/ErrorStrings'
import {underDevelopmentAlert} from '../../Utilities/CommonFunctions'
import Axios from 'axios';
// import {axios} from 'axios'
export default class Authenticate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'email': '',
            'password': ''
        }
    }

    loginClicked() {
        this.validateForm((isDone)=>{
            if(isDone) {
                const url = 'https://footballalbum-prod-api.imfootball.me/UserAPI/api/Auth/Login'
                const headerParams = {
                    'Content-Type' : 'application/json',
                    'ZUMO-API-VERSION' : '2.0.0',
                    'Ocp-Apim-Subscription-Key' : '6c192d2e80bb49a8b90f6d684cf18b9b'
                }
                const loginParams = {
                    'email' : 'y@y.co',
                    'password' : 'Ios@1234'
                }
                Axios.post(url, {headers:headerParams,loginParams}).then((response)=> {
                    alert(response)
                }).catch((error)=> {
                    alert(error)
                })
            }
        })
    }

    validateForm = async (callback) => {
        let isDone = true;
        const loginDetails = this.state
        mainValidations.forEach((input) => {
          input.validations.forEach((validation) => {
            if (!validation.regex.exec(loginDetails[input.propertyName].trim())) {
              if (isDone) {
                this.setState((preState) => ({ ...preState, validationErrors: { ...preState.validationErrors, [input.errorPropertyName]: validation.errorMessage } }));
                alert(validation.errorMessage)
                isDone = false;
              }
            } else {
              this.setState((preState) => ({ ...preState, validationErrors: { ...preState.validationErrors, [input.errorPropertyName]: '' } }));
            }
          });
        });
        await callback(isDone);
      };

    goBack() {
        this.props.navigation.pop()
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundIimage}>
                <TouchableOpacity onPress={() => { this.goBack() }} ><Image source={backButton} style={styles.headerButton}></Image></TouchableOpacity>
                <ScrollView style={styles.scrlVw}>
                    <View style={styles.view}>
                        <Image source={logoWhite} style={styles.image} />
                        <TouchableOpacity style={styles.fbButton} onPress={()=> underDevelopmentAlert()}>
                            <Image source={fbIcon} style={styles.fbIcon}></Image>
                            <Text style={styles.fbText}>LOGIN WITH FACEBOOK</Text>
                        </TouchableOpacity>
                        <View style={styles.innerView}>
                            <TextInput onChangeText={(text)=>{this.state.email = text}} autoCapitalize='none' placeholder='email address' placeholderStyle={styles.styleTextInputPlaceHolder} style={styles.styleTextInput}></TextInput>
                            <View style={styles.innerView1}></View>
                            <TextInput onChangeText={(text)=>{this.state.password = text}} secureTextEntry={true} style={styles.styleTextInput} placeholder='password'></TextInput>
                            <View style={styles.innerView1}></View>
                            <TouchableOpacity><Text style={styles.btnForgot} onPress={()=> underDevelopmentAlert()}>Forgot your password?</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.styleLogin} onPress={()=> this.loginClicked()}><Text style={styles.btnLogin}>LOG IN</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.styleCreate} onPress={() => underDevelopmentAlert()}><Text style={styles.btnCreate}>CREATE AN ACCOUNT</Text></TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}

const mainValidations = [
    {
      validations: [
        { regex: emptyRegex, errorMessage: LoginErrors.emailEmptyError },
        { regex: emailReg, errorMessage: LoginErrors.inValidEmail },
      ],
      propertyName: 'email',
      errorPropertyName: 'emailError',
    },
    {
      validations: [
        { regex: emptyRegex, errorMessage: LoginErrors.passwordEmptyError },
        { regex: passwordReg, errorMessage: LoginErrors.passwordLengthError },
      ],
      propertyName: 'password',
      errorPropertyName: 'passwordError',
    },
  ];

const styles = StyleSheet.create({
    backgroundIimage: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'contain',
        justifyContent: 'flex-start'
    },
    scrlVw: {
        flex: 1,
    },
    view: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginTop: 50
    },
    fbButton: {
        backgroundColor: 'white',
        width: '95%',
        // justifyContent:'center',
        alignItems: 'center',
        marginTop: 30,
        height: 48,
        flexDirection: 'row'
    },
    headerButton: {
        width: 30,
        height: 30,
        marginLeft: 20,
        marginTop: 60
    },
    fbIcon: {
        width: 25,
        height: 25,
        marginLeft: 20
    },
    fbText: {
        flex: 0.85,
        alignSelf: 'center',
        fontFamily: 'Rajdhani-Bold',
        color: '#4266b2',
        textAlign: 'center'
    },
    button: {
        marginLeft: 20,
        marginTop: 30
    },
    innerView: {
        width: '95%',
        height: 140,
        backgroundColor: 'white',
        marginTop: 15,
    },
    styleTextInputPlaceHolder: {
        marginLeft: 20,
        marginTop: 5,
        height: 30,
        color: '#c6c6cb',
        fontSize: 17,
        marginTop: 10
    },
    styleTextInput: {
        marginLeft: 20,
        marginTop: 5,
        height: 30,
        color: 'black',
        fontSize: 17,
        marginTop: 10,
        fontFamily: 'Rajdhani-SemiBold'
    },
    innerView1: {
        width: '90%',
        backgroundColor: '#d5dee3',
        height: 0.5,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5
    },
    btnForgot: {
        textAlign: 'center',
        fontFamily: 'Rajdhani-SemiBold',
        fontSize: 12,
        marginTop: 20,
        color: '#096b76'
    },
    styleLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        height: 48,
        width: '100%',
        backgroundColor: '#06878a',
    },
    btnLogin: {
        textAlign: 'center',
        fontFamily: 'Rajdhani-Bold',
        fontSize: 17,
        color: 'white',
        alignSelf: 'center'
    },
    styleCreate: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        height: 48,
        width: '100%',
    },
    btnCreate: {
        textAlign: 'center',
        fontFamily: 'Rajdhani-Bold',
        fontSize: 17,
        color: '#096b76',
        alignSelf: 'center'
    },
})