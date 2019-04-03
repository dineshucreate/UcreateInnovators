/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  
  callback() {
    let calc = (num1, num2, callback) => {
      return callback(num1, num2);
    }
    let add = (a, b) => {
      return a + b;
    }
    let multiply = (a, b) => {
      return a * b;
    }
    console.log(calc(5, 5, multiply));
    console.log(calc(5, 5, add));
  }

  promise() {
    let prom = new Promise(function(resolve, reject){
      let isClean = true;
      if (isClean == true) {
        resolve('Clean');
      } else {
        reject('Not cleaned');
      }
    }); 
    prom.then((resolve) => {
      console.log('My room is ' + resolve);
    }).catch((err) => {
      console.log('My room is ' + err);
    });
  }

  render() {
    this.callback()
    this.promise()
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
