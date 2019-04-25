
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Button, Alert, TextInput, Image, AsyncStorage, ActivityIndicator } from 'react-native';
import Buttonlogin from '../../styling/button';
//import Test from '../Test';
import { apiLoginPost } from '../../utilities/serverrequest'
import styles from './style';
import SplashScreen from 'react-native-splash-screen'
import Loader from '../loader/index';


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
      loading: false,
      apiData: null,
    }
  }


  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('LoginDone');
      console.log("_retrieveData:" + value);
      setTimeout(() => {
        this.moveScreen(value);
      }, 1000);

    } catch (error) {
      // Error retrieving data
    }
  };

  moveScreen = (value) => {
    if (value != null) {
      // We have data!!
      SplashScreen.hide();
      this.drawerScreen()
      console.log("_retrieveData:" + value);
    }
    else {
      SplashScreen.hide();
      //this.loginScreen()
    }
  }


  tabScreen = () => {
    this.props.navigation.navigate('MainApp')
  }
  drawerScreen = () => {
    this.props.navigation.navigate('MyDrawerNavigator')
  }

  componentDidMount() {
    this._retrieveData()
  }


  updateState = () => {
    this.setState({ name: "Rohit" });
    console.log(this.state.name);
  }

  successCallbackLogin = (response) => {
    //Alert.alert(JSON.stringify(response.data.user.firstname));
    this.setState({ apiData: response.data });
    console.log('NAME: ' + this.state.apiData.user.firstname);
    this.setState({ loading: false });
    this._storeData()
    this.changeScreen()
  }

  failureCallbackLogin = (error) => {
    Alert.alert(JSON.stringify(error));
  }

  tabScreen = () => {
    this.props.navigation.navigate('MainApp')
  }

  changeScreen = () => {
    this.drawerScreen()
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
    this.setState({ loading: true });
    apiLoginPost('https://footballalbum-prod-api.imfootball.me/userapi/api/Auth/Login', bodyValue, headerValue, this.successCallbackLogin, this.failureCallbackLogin)

  }

  _storeData = async () => {
    try {
      console.log("_storeData:");
      await AsyncStorage.setItem('LoginDone', 'DONE').then((response) => {
        // Alert.alert(JSON.stringify(response))
      }).catch((error) => {
        // Alert.alert(JSON.stringify(error))
      })
    } catch (error) {
      // Error saving data
    }
  };

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

          {this.state.loading && (
             <Loader
             loading={this.state.loading} />
          )}


        </View>
      </ImageBackground>
    );
  }
}

export default Login;
