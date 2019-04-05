/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './src/containers/login/index'
import Authenticate from './src/containers/authenticate';
import Home from './src/containers/home';
import Practice from './src/containers/practice';
import FriendList from './src/containers/friendlist'
import {createStackNavigator, createAppContainer} from 'react-navigation'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <AppContainer/>
    );
  }
}

const RootStack = createStackNavigator({
  Login:{screen:Login,
  navigationOptions:{
    header:null
  }},
  Authenticate:{screen:Authenticate,
    navigationOptions:{
    header:null
  }},
  Home:{screen:Home,
    navigationOptions:{
      header:null
    }
  },
  Practice:{screen:Practice,
    navigationOptions:{
      header:null
    }
  },
  FriendList: {screen:FriendList,navigationOptions:{
    header:null
  }}
},{
  initialRouteName: 'Login',
})

const AppContainer = createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
