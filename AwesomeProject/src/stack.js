import { createStackNavigator } from 'react-navigation';

import { login, signUp, home } from './containers';

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
export default stackNavigator;
