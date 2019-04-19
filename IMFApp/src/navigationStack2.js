import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Image } from 'react-native';
import landing from './containers/landing';
import login from './containers/login';
import signup from './containers/signup';
import home from './containers/home'

const tab = createBottomTabNavigator(
    {
        Login: login,
        Home: home
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


const stackNavigator2 = createStackNavigator(
    {
        tab: {
            screen: tab,
            navigationOptions: {
                header: null
            }
        },
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
        }
    }
);


export default stackNavigator2