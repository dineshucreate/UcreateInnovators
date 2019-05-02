/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Landing from './src/containers/landing'
import ImagePicker from './src/containers/imagepicker'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import NavigationService from './src/utils/NavigationService'
type Props = {};
const RootStack = createStackNavigator({
  Landing:{screen:Landing, navigationOptions:{header:null}},
  ImagePicker:{screen:ImagePicker, navigationOptions:{header:null}}
})
const AppContainer = createAppContainer(RootStack)
export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer ref={(nav) => {
        NavigationService.setTopLevelNavigator(nav)
      }}/>
    );
  }
}

