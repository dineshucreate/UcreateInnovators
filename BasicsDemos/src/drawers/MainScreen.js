import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  
  
import {  
    createSwitchNavigator,  
    createAppContainer,  
    createDrawerNavigator,  
    createStackNavigator  
} from 'react-navigation';  
export default class App extends Component {  
    render() {  
        return <AppContainer />;  
    }  
}  