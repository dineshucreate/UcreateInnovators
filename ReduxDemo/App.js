/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Login from "./src/containers/login";
import Home from "./src/containers/home";
import allReducers from "./src/reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { createAppContainer, createStackNavigator } from "react-navigation";
type Props = {};
const store = createStore(allReducers, applyMiddleware(thunk));
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const rootStack = createStackNavigator({
  Login: { screen: Login, navigationOptions: { header: null } },
  Home: { screen: Home, navigationOptions: { header: null } }
});

const AppContainer = createAppContainer(rootStack);
