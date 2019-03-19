/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import _ from 'lodash';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const length = 100;
const vals = [1, 2, 'good', [1, 2], {name: 'Peter', age: 32}];

export default class App extends Component {

  regularFunc = (a,b,c) => {
    return a*b*c;
  }

  curryFunction = (a) => {
          a = a+4  
        return (b) => {
            return (c) => {
                return a* b *length;
            }
        }
  }   
  // or
  curryFunction1 = (a) => (b) => (c) => a+b+c

  // 
  func1 = (width, height) => {
      return (length) => width*height*length
  }

  // 
  curryHello = (strHello) => {
    return (strNames) => `${strHello} ${strNames}`
  }



  
  render() {
   // var func1 = this.curryFunction2(2,3)
    var func3 = this.curryHello('Hi there,')
    var lodashCurry  = _.curry(this.regularFunc(2,3,4))
    var func2 = lodashCurry(2)(3)(4);


    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{func2(300)}</Text>
        <Text style={styles.instructions}>{func3('Aman')}</Text>
        <Text style={styles.instructions}>{func3('Mani')}</Text>
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
