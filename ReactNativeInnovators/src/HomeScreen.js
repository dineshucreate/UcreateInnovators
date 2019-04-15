
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Button, Alert, TextInput, Image } from 'react-native';
import Buttonlogin from './styling/Button';
import Test from './Test';
import { apiLoginPost } from './utilities/serverrequest'
class HomeScreen extends React.Component {
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
      textInputPassword: ''
    }
  }

  updateState = () => {
    this.setState({ name: "Rohit" });
  }

  successCallbackLogin = (response) => {
    Alert.alert(JSON.stringify(response));
  }

  failureCallbackLogin = (error) => {
    Alert.alert(JSON.stringify(error));
  }



  changeScreen = () => {
    this.props.navigation.navigate('Setting', {
      itemId: 86,
      otherParam: 'anything you want here',
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
    console.log('...ender.......  ' + this.props);

    return (

      <ImageBackground source={require('./assets/global_bg.png')}
        style={styles.containerImage}>


        <View>
          <Test name={this.state.name} update={this.updateState} />
        </View>



        <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ width: 250, height: 130, resizeMode: 'contain' }}
            source={require('./assets/ic_im_logo.png')} />
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
              Forgot Password?</Text>

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

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  containerImage: {
    flex: 1
  },
  welcome: {
    flex: 0.8,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: "#ffffff",
    width: "90%",
    marginTop: 30,
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
  titleText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#06878A',
    marginLeft: 15,

  },
  TextShadowStyle:
  {
    textAlign: 'center',
    fontSize: 20,
    textShadowColor: '#05928E',
    color: '#ffffff',
    fontWeight: 'bold',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
    marginTop: 20,

  },
});