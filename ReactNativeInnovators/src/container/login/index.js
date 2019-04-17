
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Button, Alert, TextInput, Image } from 'react-native';
import Buttonlogin from '../../styling/button';
//import Test from '../Test';
import { apiLoginPost } from '../../utilities/serverrequest'
import styles from './style';



class Login extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    console.log("///////////////  " + props);
    console.log('..........  ' + this.props);

    this.state = {
      name: "Amit Agnihotri",
      textInputLogin: '',
      textInputPassword: '',
      apiData: null,
    }
  }

  updateState = () => {
    this.setState({ name: "Rohit" });
    console.log(this.state.name);
  }

  successCallbackLogin = (response) => {
    //Alert.alert(JSON.stringify(response.data.user.firstname));
    this.setState({ apiData: response.data });
    console.log('NAME: ' + this.state.apiData.user.firstname);
    this.changeScreen(this.state.apiData.user.firstname)
  }

  failureCallbackLogin = (error) => {
    Alert.alert(JSON.stringify(error));
  }



  changeScreen = (name) => {
    this.props.navigation.navigate('PractiseFlatList', {
      itemId: name

    })
  }


  GetValueFunction = () => {

    const { textInputLogin, textInputPassword } = this.state;
    const bodyValue = {
      'email': 'y@y.co',
      'password': 'Ios@1234'
    }

    const headerValue = {
      'Content-Type': 'application/json',
      'ZUMO-API-VERSION': '2.0.0',
      'Ocp-Apim-Subscription-Key': '6c192d2e80bb49a8b90f6d684cf18b9b'
    }
    apiLoginPost('https://footballalbum-prod-api.imfootball.me/userapi/api/Auth/Login', bodyValue, headerValue, this.successCallbackLogin, this.failureCallbackLogin)

  }
  render() {
    const { navigate } = this.props.navigation;
    console.log('...Render.......  ' + this.props);

    return (

      <ImageBackground source={require('../../assets/global_bg.png')}
        style={styles.containerImage}>

        <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ width: 250, height: 130, resizeMode: 'contain' }}
            source={require('../../assets/ic_im_logo.png')} />

          <View style={styles.welcome}>

            <TextInput style={styles.input}
              underlineColorAndroid="#06878A"
              placeholder="Email"
              placeholderTextColor="#06878A"
              autoCapitalize="none"
              onChangeText={textInputLogin => this.setState({ textInputLogin })}
            />
            <TextInput style={styles.input}
              underlineColorAndroid="#06878A"
              placeholder="Password"
              placeholderTextColor="#06878A"
              autoCapitalize="none"
              onChangeText={textInputPassword => this.setState({ textInputPassword })}
            />
            <Text style={styles.titleText}>
              {(this.state.apiData != null) ? this.state.apiData.user.firstname : 'Forgot Password'}</Text>

          </View>
          <Buttonlogin title="Login"
            onClick={this.GetValueFunction}
          />
          <Text style={styles.TextShadowStyle}>CREATE AN ACCOUNT</Text>
        </View>
      </ImageBackground>
    );
  }
}

export default Login;
