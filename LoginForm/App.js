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
  TextInput
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>

        <View style={styles.ImageContainer}>
          <Image style={{ width: 250, height: "50%", resizeMode: 'contain' }}
            source={require('./src/assets/ic_home_golfclub.png')} />
        </View>

        <View style={styles.container}>

          <TextInput
            placeholder="Username/UserID"
            style={styles.TextInputStyle}
            maxLength={15} />

          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.TextInputStyle}
            maxLength={15} />
        </View>

      </View >
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  ImageContainer: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 0.6,
    width: "100%",
    alignItems: 'center',
    backgroundColor: '#f1f1f0',
  },
  TextInputStyle: {
    width: "60%",
    height: 40,
    marginTop: 20,
    fontSize: 16,
    alignItems: 'center',
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 20,
  },
});
