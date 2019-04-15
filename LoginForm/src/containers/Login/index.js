import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';
import StyleSheet from StyleSheet;

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
        </View>
  
        </View >
      );
    }
  }