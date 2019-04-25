import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { AsyncStorage } from 'react-native'
import stack from './src/navigationStack';
import stack2 from './src/navigationStack2';
import SplashScreen from 'react-native-splash-screen'

export default class NavigationComponentInitial extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
    this.getValueFromAsync();
  }

  async getValueFromAsync() {
    const value = await AsyncStorage.getItem('userData')
    if (value != null) {
      this.setState({ value: value });
      console.log('....   ' + this.state.value);

    }
  }
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }
  render() {
    return (this.state.value === '' ?
      (<Begin1 />) : (<Begin2 />)
    );
  }
}

const Begin1 = createAppContainer(stack);
const Begin2 = createAppContainer(stack2);