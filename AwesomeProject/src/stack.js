import { createStackNavigator } from 'react-navigation';

import { login, signUp, home } from './containers';

const stackNavigator = createStackNavigator(
	{
		login: login,
		signUp: signUp,
		home: home
	},
	{
		initialRouteName: 'login'
	}
);
export default stackNavigator;
