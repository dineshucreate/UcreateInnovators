import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { Image } from 'react-native';
import landing from './containers/landing';
import login from './containers/login';
import signup from './containers/signup';
import home from './containers/home'
import news from './containers/news';
import stats from './containers/stats';
import friends from './containers/friends';
import fanmojies from './containers/fanmojies';
import SidePanel from './containers/sidePanel';


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
        },
        initialRouteName: 'Stats'
    }
);

const sidePanelDrawer = createDrawerNavigator(
    {
        Tab: {
            screen: tab,
        },
        Fanmojies: {
            screen: fanmojies,
        },
        Friends: {
            screen: friends,
        },
        Landing: {
            screen: landing,
        }
    },
    {
        drawerWidth: 300,
        contentComponent: SidePanel,

    }
);

const stackNavigator2 = createStackNavigator(
    {
        sidePanelDrawer: {
            screen: sidePanelDrawer, navigationOptions: {
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