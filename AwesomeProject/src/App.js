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
    let prom = new Promise(function(resolve, reject) {
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

  // Complex promise
  complexPromise() {
    let cleanRoom = function() {
      return new Promise(function(resolve, reject) {
        resolve('Cleaned room ');
      });
    }

    let removeGarbage = function(message) {
      return new Promise(function(resolve, reject) {
        resolve( message + 'Garbage collected ');
      });
    }
    let winIceCream = function(message) {
      return new Promise(function(resolve, reject) {
        resolve(message + 'Ice cream ');
      });
    }

    cleanRoom().then(function(resultRoom) {
      return removeGarbage(resultRoom);
    }).then(function(resultRoom){
      return winIceCream(resultRoom);
    }).then(function(resultRoom){
      console.log('Everything is finished ' + resultRoom);
    })

    Promise.all([cleanRoom(), removeGarbage(), winIceCream()]).then(function(){
      console.log('Finished at once');
    })

    Promise.race([cleanRoom(), removeGarbage(), winIceCream()]).then(function(){
      console.log('Call only one of them');
    })

    //Async/Await
  
      const preMovie = async () => {
        const wifeBringingTickets = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('tickets');
          }, 3000);
        })
  
        let ticket = await wifeBringingTickets;
  
        console.log(`Wife: I have the tickets ${tickets}` );
        console.log(`Husband: we should go in`);
        console.log(`Wife: No i need popcorn`);
  
        const getPopCorn = new Promise((resolve, reject) => {
          resolve('pocorn');
        })
        let popcorn = await getPopCorn;
        console.log(`Husband: we got popcorn ${popcorn}`);
        console.log(`Husband: Now we should go in`);
        console.log(`Wife: No i need butter`);
  
        const getButter = new Promise((resolve, reject) => {
          resolve('butter');
        })
        const butter = await getButter;
        console.log(`Husband: we got butter ${butter}`);
        console.log(`Husband: Now we should go in`);
  



        return ticket;
      }

      console.log(preMovie);
      
  }

  render() {
    this.callback()
    this.promise()
    this.complexPromise()
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
