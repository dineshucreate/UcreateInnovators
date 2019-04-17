/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={styles.MainContainer}>
 
         <View style={styles.ImageContainer}>
            <Image style={{ width: '60%', height: "50%", resizeMode: 'contain' }}
           source={require('./src/assets/logo.png')} />
         </View>
 
      <View style={styles.container}>
      <TextInput 
        placeholder = "UserName/UserID"
        style={styles.textInputLogin}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      </View>
      </View>
    );
  }
 }
 
 const styles = StyleSheet.create({
  MainContainer:{
    flex: 1,
    flexDirection: 'column',
  },
  ImageContainer:{
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 0.7,
    alignItems: 'center',
    backgroundColor: '#f1f1f0',
  },
  textInputLogin: {
    marginTop: 200,
    width: '50%',
    height: 40,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: '#f1f1f0',
    textAlign: 'center',
    
  },
 });