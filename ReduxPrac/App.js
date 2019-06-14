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
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./src/reducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './src/saga'
const sagaMiddleware = createSagaMiddleware()
type Props = {};
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Landing />
      </Provider>
    );
  }
}
sagaMiddleware.run(rootSaga)