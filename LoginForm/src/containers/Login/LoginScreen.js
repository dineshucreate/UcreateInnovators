/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { createStackNavigator, createAppContainer } from "react-navigation";
import SecondScreen from './SecondScreen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

 class LoginScreen extends Component {

  myArrowFun = () =>{
    this.props.navigation.navigate('Details')
  }
  
  render() {
    return (
      <View style={styles.MainContainer}>

        <View style={styles.ImageContainer}>
          <Image style={{ width: 250, height: "50%", resizeMode: 'contain' }}
            source={require('../../assets/ic_home_golfclub.png')}
            />
        </View>

        <View style={styles.container}>

          <Text
            style={{
              fontWeight: 'bold',
              margin: 20,
              color: '#acacac'
            }}>
            PLEASE LOGIN
          </Text>

          <TextInput
            placeholder="Username/UserID"
            keyboardType="email-address"
            style={styles.TextInputStyle}
            autoFocus={true}
            maxLength={15} />

          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.TextInputStyle}
            maxLength={15} />

          <TouchableOpacity onPress={ this.myArrowFun}
            style={styles.TouchableOpacityStyle}>
            <Text
              style={{
                textAlign: 'center',
                color: '#ffffff'
              }}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={{
          flex: 0.1,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
          fontSize: 20,
          marginBottom: 10,
          opacity: 0.5,
        }}>
          <Text
            style={{
              justifyContent: 'center',
              color: '#000000',
        
            }}>© 2019 Open Solutions International Ltd</Text>
        </View>

      </View >
    );
  }
}

const Apps = createStackNavigator(
  {
    Home: LoginScreen,
    Details: SecondScreen,
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(Apps);

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f1f1f0',
  },
  ImageContainer: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 0.5,
    width: "100%",
    alignItems: 'center',
  },
  TouchableOpacityStyle: {
    width: "60%",
    marginTop: 10,
    fontSize: 16,
    padding: 13,
    backgroundColor: "#c0995b",
    color: '#ffffff',
    borderRadius: 20,
  },
  TextInputStyle: {
    width: "60%",
    marginTop: 10,
    fontSize: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: "#DDD8D3",
    textAlign: 'center',
    borderRadius: 20,
    padding: 5,
    textAlignVertical: 'center',
    backgroundColor: "#ffffff",
  },
});