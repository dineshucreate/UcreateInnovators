import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { Image } from 'react-native';
import landing from './containers/landing';
import login from './containers/login';
import signup from './containers/signup';
import home from './containers/home'
import news from './containers/news';
import stats from './containers/stats';




const tab = createBottomTabNavigator(
    {
        Home: home,
        Stats: stats,
        News: news
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName === 'Home') {
                    return (
                        <Image
                            source={require('./assets/images/live-tabbar.png')}
                            style={{ width: 20, height: 20, tintColor: tintColor }}
                        />
                    );
                } else if (routeName === 'Stats') {
                    return (
                        <Image
                            source={require('./assets/images/stats-tabbar.png')}
                            style={{ width: 20, height: 20, tintColor: tintColor }}
                        />
                    );
                } else {
                    return (
                        <Image
                            source={require('./assets/images/news-tabbar.png')}
                            style={{ width: 20, height: 20, tintColor: tintColor }}
                        />
                    );
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

const sidePanel = createDrawerNavigator({
    Tab: tab
}
);

const stackNavigator2 = createStackNavigator(
    {
        sidePanel: {
            screen: sidePanel, navigationOptions: {
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
        },
    }
);


export default stackNavigator2