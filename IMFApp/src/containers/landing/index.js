import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './style';

export default class Landing extends Component {
  loginPress = (() => {
    const { navigation } = this.props;
    navigation.navigate('login');
  });
  signupPress = (() => {
    const { navigation } = this.props;
    navigation.navigate('signup');
  });
  render() {
    return (
      <ImageBackground style={styles.backgroundImage} source={require('../../assets/images/background.png')}>
        <Image style={styles.logoImage} source={require('../../assets/images/logoWhite.png')} />
        <TouchableOpacity onPress={this.signupPress}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>CREATE AN ACCOUNT</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.loginPress}>
          <Text style={styles.buttonLoginText}>LOG IN</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
