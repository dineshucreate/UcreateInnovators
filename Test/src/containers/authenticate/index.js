import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { backgroundImage, fbIcon, logoWhite, backButton } from '../../assets/images/images'
import { TextInput, ScrollView } from 'react-native-gesture-handler';
export default class Authenticate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'header': 'Authenticate',
            'count': 0
        }
    }

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
                        <TouchableOpacity style={styles.fbButton}>
                            <Image source={fbIcon} style={styles.fbIcon}></Image>
                            <Text style={styles.fbText}>LOGIN WITH FACEBOOK</Text>
                        </TouchableOpacity>
                        <View style={styles.innerView}>
                            <TextInput placeholder='email address' placeholderStyle={styles.styleTextInputPlaceHolder} style={styles.styleTextInput}></TextInput>
                            <View style={styles.innerView1}></View>
                            <TextInput style={styles.styleTextInput} placeholder='password'></TextInput>
                            <View style={styles.innerView1}></View>
                            <TouchableOpacity><Text style={styles.btnForgot}>Forgot your password?</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.styleLogin}><Text style={styles.btnLogin}>LOG IN</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.styleCreate}><Text style={styles.btnCreate}>CREATE AN ACCOUNT</Text></TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}
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
    styleLogin:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        height:48,
        width:'100%',
        backgroundColor:'#06878a',
    },
    btnLogin: {
        textAlign: 'center',
        fontFamily: 'Rajdhani-Bold',
        fontSize: 17,
        color: 'white',
        alignSelf:'center'
    },
    styleCreate:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        height:48,
        width:'100%',
    }, 
    btnCreate: {
        textAlign: 'center',
        fontFamily: 'Rajdhani-Bold',
        fontSize: 17,
        color: '#096b76',
        alignSelf:'center'
    },
})