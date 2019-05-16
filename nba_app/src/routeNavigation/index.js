
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import login from '../containers/login/index'
import Live from '../containers/bottomtab/live/index';
import Stats from '../containers/bottomtab/stats/index';

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

const MainApp = createBottomTabNavigator(
  {
    Live: Live,
    Stats: Stats

  },
  {
 
    tabBarOptions: {
      activeTintColor: '#AEE675',
      inactiveTintColor: '#FFFFFF',
      style: {
        backgroundColor: '#096B76'
      }
    }
  }
);

const SwitchNavigator = createSwitchNavigator({
  loginScreen: AuthStack,
  dashboard: MainApp
});
export default createAppContainer(SwitchNavigator);