import { createStackNavigator, createAppContainer, createBottomTabNavigator ,createDrawerNavigator} from 'react-navigation';
import Login from './src/container/login';

import FirstScreen from './src/container/splash';
import React, { Component } from 'react';
import { Image } from 'react-native';
import Live from './src/container/bottomtab/live';
import Stats from './src/container/bottomtab/stats';




const MyDrawerNavigator = createDrawerNavigator({
  Live: {
    screen: Live,
  },
  Stats: {
    screen: Stats,
  },
});


const MainApp = createBottomTabNavigator(
  {
    // PractiseFlatList: {
    //   screen: PractiseFlatList
    // },
    Live: Live,
    Stats: Stats

  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Live') {
          //<Image  source={focused ? require('./src/assets/live-tabbar-active.png') : require('./src/assets/live-tabbar.png')} style={{ width: 20, height: 20,tintColor:tintColor }} />;
          return <Image  source={require('./src/assets/live-tabbar.png')} style={{ width: 20, height: 20,tintColor:tintColor }} />;
        } else {
          //return <Image source={focused ? require('./src/assets/stats-tabbar-active.png') : require('./src/assets/stats-tabbar.png')} style={{ width: 20, height: 20,tintColor:tintColor }} />;
          return <Image source={require('./src/assets/stats-tabbar.png')} style={{ width: 20, height: 20,tintColor:tintColor }} />;
        }
      }
    }),
    tabBarOptions: {
      activeTintColor: '#AEE675',
      inactiveTintColor: '#FFFFFF',
      style: {
        backgroundColor: '#096B76'
      }
    }
  }
);


const LoginTab = createStackNavigator({
  // FirstScreen: {
  //   screen: FirstScreen
  // },
  Login:{screen: Login},
  MyDrawerNavigator: {
    screen: MyDrawerNavigator,
    navigationOptions: () => ({
      header: null
    })
  }
});

const App = createAppContainer(LoginTab);

export default App;