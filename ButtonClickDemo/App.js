/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
      firstName:'Rohit',
      lastName:'Sharma',
      //arr:[{}]
    }
  }
  // Click function defined in JS form.
  simpleFun() {
    Alert.alert("You have clicked on simple fuction");
  }

  //Arrow Function.
  myArrowFun() {
    Alert.alert("You have clicked on Arrow fuction");
  }

  updateState = () => {
    this.setState({firstName:'Karan',lastName:'Nassa'})
  }

  render() {
    return (

      /*
        Ref from : https://facebook.github.io/react-native/docs/handling-touches
      */

      <View style={styles.container}>
        <View style={styles.flexParentContainer}>
        
          <Text style={styles.welcome}>{this.state.firstName}</Text>

          <TouchableOpacity onPress={() => this.myArrowFun()}>
            <Text style={{
              color: 'white',
              marginTop: 15,
              fontSize: 25,
              backgroundColor: `blue`,
              padding: 30,
              alignItems: 'stretch',
              textAlign: 'center'
            }}>Click for Arrow Function</Text>
          </TouchableOpacity>

          <View style={styles.AlignCenter}>
            <TouchableOpacity onPress={this.updateState}>
              <Text style={styles.buttonContainer}>Simple Function</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.alternativeLayoutButtonContainer}>
            <Button
              onPress={this._onPressButton}
              title="This looks great!" />

            <Button
              onPress={this._onPressButton}
              title="OK!"
              color="#841584" />

          </View>
        </View>
        {
         /*  Color and backgroundColor properties work differently in
          iOS and Android so try to use different property.
         <Button 
               onPress = {this.clickFun1}
               title = "1 Button Function"
               color= 'blue'
             /> */}
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
    padding: 15,
    width: `100%`,
    backgroundColor: 'red',
    color: 'white',
  },
  buttonContainer: {
    margin: 0,
    fontSize: 20,
    width: 200,
    padding: 10,
    textAlign: 'center',
    backgroundColor: `#00ff00`,
  },
  AlignCenter: {
    textAlign: 'center',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  alternativeLayoutButtonContainer: {
    textAlign: 'center',
    padding: 0,
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    //justifyContent: 'space-between'
  },
  flexParentContainer: {
    width: "100%",
    flex: 1,
    flexDirection: `column`,
  }
});
