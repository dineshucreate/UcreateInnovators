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
import allReducers from "./src/reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootSaga from './src/sagas'
import createSagaMiddleWare from 'redux-saga'
const sagaMiddleWare = createSagaMiddleWare(rootSaga)
const store = createStore(allReducers, applyMiddleware(sagaMiddleWare));
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}
sagaMiddleWare.run(rootSaga)
