
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import { Image } from 'react-native';
import React, { Component } from 'react';
import login from '../containers/login/index'
import Live from '../containers/bottomtab/live/index';
import Stats from '../containers/bottomtab/stats/index';
import StatsDetails from '../containers/bottomtab/stats/statsdetails/index';
import LiveDetails from '../containers/bottomtab/live/livedetails/index';
import LogoHeader from '../utils/logo';

const AuthStack = createStackNavigator(
  {
    login: {
      screen: login,
      navigationOptions: () => ({
        header: null,
      })
    },
  },
);

const headerConf = {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#001338'
    },
    headerTintColor: 'white',
    headerTitle: LogoHeader
  }
}


const LiveStack = createStackNavigator(
  {
    Live: Live,
    LiveDetails: LiveDetails

  }, headerConf
);

const StatsStack = createStackNavigator(
  {
    Stats: Stats,
    StatsDetails: StatsDetails,

  }, headerConf
);

const MainApp = createBottomTabNavigator(
  {
    Live: LiveStack,
    Stats: StatsStack

  }, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Live') {
          return <Image source={require('../assets/live-tabbar.png')} style={{ width: 28, height: 25, tintColor: tintColor }} />;
        } else {
          return <Image source={require('../assets/stats-tabbar.png')} style={{ width: 28, height: 25, tintColor: tintColor }} />;
        }
      }
    }),
    tabBarOptions: {
      activeTintColor: '#659EC7',
      inactiveTintColor: '#FFFFFF',
      style: {
        backgroundColor: '#001338'
      }
    }
  }
);

const SwitchNavigator = createSwitchNavigator({
  loginScreen: AuthStack,
  dashboard: MainApp
});
export default createAppContainer(SwitchNavigator);