import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { login, signUp, home, settings } from './containers';

const stackNavigator = createStackNavigator(
	{
		login: login,
		signUp: signUp,
		home: { screen: home, navigationOptions: { header: null } }
	},
	{
		initialRouteName: 'login'
	}
);


