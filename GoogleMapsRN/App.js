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
import Places from './src/containers/places'
import {createAppContainer, createStackNavigator} from 'react-navigation'
const rootStack = createStackNavigator({
  Landing: {screen:Landing, navigationOptions:{header:null}},
  Places: {screen:Places, navigationOptions:{header:null}},
})
const AppContainer = createAppContainer(rootStack)
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer/>
    );
  }
}