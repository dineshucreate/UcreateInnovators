/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Landing from "./src/containers/landing";
import Static from "./src/containers/static";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from './src/reducer'
import {createStackNavigator, createAppContainer} from 'react-navigation'
type Props = {};
import createSagaMiddleware from 'redux-saga'
const sagaMiddleWare = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
import rootSaga from './src/saga'
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
  landing : {
    screen:Landing, navigationOptions:{
      header:null
    }
  },
  static : {
    screen:Static, navigationOptions:{
      header:null
    }
  }
})
sagaMiddleWare.run(rootSaga)
const AppContainer = createAppContainer(rootStack)