/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import {
  LoginManager, AccessToken, GraphRequest, GraphRequestManager, LoginButton
} from 'react-native-fbsdk';
import styles from './style';

export default class Home extends Component {

  loginClicked = () => {
    const { navigation } = this.props;
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      (result) => {
        if (result.isCancelled) {
          Alert.alert('Login was cancelled');
        } else {
              AccessToken.getCurrentAccessToken().then(
                () => {
                  const responseInfoCallback = (error, result2) => {
                    if (error) {
                      Alert.alert(`Error fetching data: ${error.toString()}`);
                    } else {
                      console.log(JSON.stringify(result2));
                      // navigation.navigate('fb', { name: result2.name, 
                      //   avatar: result2.picture.data.url });
                    }
                  };
                  const infoRequest = new GraphRequest(
                    '/me?fields=name,email,picture.type(large)',
                    null,
                    responseInfoCallback
                  );
                  new GraphRequestManager().addRequest(infoRequest).start();
                }
              );
        }
      },
      (error) => {
        Alert.alert(`Login failed with error: ${error}`);
      }
    );
  }

  
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={this.loginClicked}>
        <Text style={styles.button}>Login via Faceebook</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

