/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground,Button,Alert,TextInput,Image} from 'react-native';
import Button_Login from './src/styling/Button';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      // <View style={styles.container}>
         <ImageBackground source={require('./src/assets/global_bg.png')}
           style={styles.containerImage}>
           <View style={{flex:0.8, alignItems:'center', justifyContent:'center'}}>
           <Image style={{width: 250, height: 130, resizeMode:'contain'}}
           source={require('./src/assets/ic_im_logo.png')}/>
             <View style={styles.welcome}>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "#06878A"
               placeholder = "Email"
               placeholderTextColor = "#06878A"
               autoCapitalize = "none"
               />
               <TextInput style = {styles.input}
               underlineColorAndroid = "#06878A"
               placeholder = "Password"
               placeholderTextColor = "#06878A"
               autoCapitalize = "none"
               />
            
            </View>
            <Button_Login>Log In</Button_Login>
            </View>
         </ImageBackground>
      // </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  containerImage: {
    flex:1
    },
  welcome: {
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: "#ffffff",
    width: "90%",
    marginTop:30,
    },
  buttonStyle: {
    marginTop: 10,
    fontSize: 50,
  },
  instructionsThird: {
    //flex: 3,
    backgroundColor: "#590000",
    width: 50,
    height: 50,
  },
  input: {
    margin: 10,
    height: 40,
    width: 300,
   },
});
