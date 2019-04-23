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
import createSagaMiddleware from 'redux-saga'
import rootSaga from './src/sagas'
import { createAppContainer, createStackNavigator } from "react-navigation";
type Props = {};
const sagaMiddleWare = createSagaMiddleware()
const store = createStore(allReducers, applyMiddleware(sagaMiddleWare));
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
sagaMiddleWare.run(rootSaga)
const AppContainer = createAppContainer(rootStack);
