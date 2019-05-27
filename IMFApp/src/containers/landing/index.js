import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import styles from './style';
import { withInternetConnection } from './../../utilities/checkInternet'

export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: 'Alex bolas'
    }
  }
  loginPress = () => {
    // withInternetConnection((arg) => {
    //   console.log('test---- ' + arg);
    //   Alert.alert(JSON.stringify(arg));
    // })('testing callback')
    const { navigation } = this.props;
    navigation.navigate('login');
  };
  signupPress = () => {
    const { navigation } = this.props;
    navigation.navigate('signup', { uName: this.state.firstname });
  };
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
