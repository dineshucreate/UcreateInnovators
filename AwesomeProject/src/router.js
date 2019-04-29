import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { login, signUp, home, settings, profile } from './containers';
import sidePanel from './components/SidePanel';
import signup from './containers/signup';
import { createAppContainer } from 'react-navigation';
// You should not have the drawer in tab
const tab = createBottomTabNavigator(
	{
		Home: {
			screen: home
		},
		Settings: settings
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				if (routeName === 'Home') {
					return (
						<Image
							source={require('./assets/home.png')}
							style={{ width: 20, height: 20, tintColor: tintColor }}
						/>
					);
				} else {
					return (
						<Image
							source={require('./assets/settings.png')}
							style={{ width: 20, height: 20, tintColor: tintColor }}
						/>
					);
				}
			}
		}),
		tabBarOptions: {
			activeTintColor: '#FF6F00',
			inactiveTintColor: '#263238'
		}
	}
);

// Pass the tabs in Drawer or Stack
const MyDrawerNavigator = createDrawerNavigator(
	{
		Home: {
			screen: tab
		},
		Profile: {
			screen: profile
		},
		Login: {
			screen: login
		},
		SignUp: {
			screen: signup
		}
	},
	{
		contentComponent: sidePanel,
		drawerWidth: 300
	}
);

const LoginTab = createStackNavigator(
	{
		Login: {
			screen: login
		},
		Profile: {
			screen: profile
		},
		home: {
			screen: home,
			navigationOptions: {
				header: null
			}
		},
		drawer: {
			screen: MyDrawerNavigator,
			navigationOptions: {
				header: null
			}
		}
	},
	{
		initialRouteName: 'Login'
	}
);

const Begin = createAppContainer(LoginTab);

export default Begin;
