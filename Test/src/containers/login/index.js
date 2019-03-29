import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity} from 'react-native';
import {backgroundImage, logoWhite} from '../../assets/images/images'
import CustomText from '../../components/Text/CustomText'
import styles from '../../assets/Styles/styles'
export default class Login extends Component {
  async test1() {
    const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
    const json = await response.json();
    alert(json[0])
  }
  componentWillMount () {
    let arrUsers = [
      1,2,3,4,5
    ]
    // arrUsers.forEach(test)
}


    render() {
      return (
        <ImageBackground source={backgroundImage} style={styles.image}>
         <View style={styles.innerContent}>
          <Image source={logoWhite} style={styles.innerLogo}/>
          <TouchableOpacity style={styles.buttonBackground1} onPress={() => this.test1()}><Text style={styles.button1}>CREATE AN ACCOUNT</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonBackground2} onPress={() => {this.props.navigation.navigate('Home',
          {'val1':'1'}
          )}}><Text style={styles.button2}>LOG IN</Text></TouchableOpacity>
          </View> 
        </ImageBackground>
      );
    }
  }