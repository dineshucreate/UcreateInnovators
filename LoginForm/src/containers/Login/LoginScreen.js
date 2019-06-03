/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {
  StackActions,
  NavigationActions,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import SecondScreen from './SecondScreen';

class LoginScreen extends Component {

  myArrowFun = () => {
    /* 1. Navigate to the Details route with params */
    // this.props.navigation.navigate('Details', {
    //   itemId: 40,
    //   otherParam: 'anything you want here',
    // });

    //Remove app screen from stack navigator.
    const resetAction = StackActions.reset({
      index: 0,
      //https://reactnavigation.org/docs/en/stack-actions.html#reset
      actions: [NavigationActions.navigate({
        routeName: 'Details',
        params: {
          itemId: 40,
          otherParam: 'KARAN NASSA',
        },
      })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    var array = [1, 3, 5];
    var [a, b] = array;
    console.log(a, b);


    const mPromise = new Promise((resolve, reject) => {
      var number = Math.random();
      console.log("Value : " + number);
      if (number > 100) {
        resolve("Number is greator");
      } else {
        reject("Project failed");
      }
    });

    mPromise.then(value => console.log(value))
      .catch(error => console.log(error));

    return (
      <View style={styles.MainContainer}>

        <View style={styles.ImageContainer}>
          <Image style={{ width: 250, height: "50%", resizeMode: 'contain' }}
            source={require('../../assets/ic_home_golfclub.png')}
          />
        </View>

        <View style={styles.container}>

          <Text
            style={{
              fontWeight: 'bold',
              margin: 20,
              color: '#acacac'
            }}>
            PLEASE LOGIN
          </Text>

          <TextInput
            placeholder="Username/UserID"
            keyboardType="email-address"
            style={styles.TextInputStyle}
            autoFocus={true}
            maxLength={15} />

          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.TextInputStyle}
            maxLength={15} />

          <TouchableOpacity onPress={this.myArrowFun}
            style={styles.TouchableOpacityStyle}>
            <Text
              style={{
                textAlign: 'center',
                color: '#ffffff'
              }}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={{
          flex: 0.1,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
          fontSize: 20,
          marginBottom: 10,
          opacity: 0.5,
        }}>
          <Text
            style={{
              justifyContent: 'center',
              color: '#000000',

            }}>© 2019 Open Solutions International Ltd</Text>
        </View>

      </View >
    );
  }
}

const Apps = createStackNavigator(
  {
    Home: LoginScreen,
    Details: SecondScreen,
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(Apps);

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f1f1f0',
  },
  ImageContainer: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 0.5,
    width: "100%",
    alignItems: 'center',
  },
  TouchableOpacityStyle: {
    width: "60%",
    marginTop: 10,
    fontSize: 16,
    padding: 13,
    backgroundColor: "#c0995b",
    color: '#ffffff',
    borderRadius: 20,
  },
  TextInputStyle: {
    width: "60%",
    marginTop: 10,
    fontSize: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: "#DDD8D3",
    textAlign: 'center',
    borderRadius: 20,
    padding: 5,
    textAlignVertical: 'center',
    backgroundColor: "#ffffff",
  },
});