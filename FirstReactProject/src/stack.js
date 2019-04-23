import { createStackNavigator, createAppContainer } from 'react-navigation';

import {
  Login,
} from './containers';
import drawerNavigator from './drawer';

const stackNavigator = createStackNavigator(
  {
    login: { screen: Login, navigationOptions: { header: null } },
    drawer: { screen: drawerNavigator, navigationOptions: { header: null } },
  },
  {
    initialRouteName: 'login'
  }
);
export default createAppContainer(stackNavigator);
