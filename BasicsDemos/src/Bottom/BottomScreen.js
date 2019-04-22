import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTapNavigator} from 'react-navigation';


const TabNavigator = createBottomTabNavigator({
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
  });
  
  export default (TabNavigator);