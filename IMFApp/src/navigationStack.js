import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { Image } from 'react-native';
import landing from './containers/landing';
import login from './containers/login';
import signup from './containers/signup';
import home from './containers/home';
import stats from './containers/stats';
import news from './containers/news'

const tab = createBottomTabNavigator(
  {
    Home: home,
    Stats: stats,
    News: news
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      header: null,
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'login') {
          return <Image source={require('./assets/images/live-tabbar.png')} style={{ width: 20, height: 20, tintColor: tintColor, marginTop: 10 }} />;
        } else {
          return <Image source={require('./assets/images/stats-tabbar.png')} style={{ width: 20, height: 20, tintColor: tintColor, marginTop: 10 }} />;
        }
      }
    }),
    tabBarOptions: {
      activeTintColor: '#AEE675',
      inactiveTintColor: '#FFFFFF',
      style: {
        backgroundColor: '#096B76'
      },
      labelStyle: {
        fontSize: 16,
        fontFamily: 'rajdhani-bold',
      }
    }
  }
);

const sidePanel = createDrawerNavigator({
  Tab: tab
}
);

const stackNavigator = createStackNavigator(
  {
    landing: {
      screen: landing, navigationOptions: {
        header: null
      }
    },
    login: {
      screen: login, navigationOptions: {
        header: null
      }
    },
    signup: {
      screen: signup, navigationOptions: {
        header: null
      }
    },
    sidePanel,
  }
);


export default stackNavigator