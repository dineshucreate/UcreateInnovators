import { createStackNavigator, createAppContainer } from 'react-navigation';

import {
  Login,
  profile,
} from './containers';
import drawerNavigator from './drawer';
import tabNavigator from './tab';

const stackNavigator = createStackNavigator(
  {
    login: { screen: Login, navigationOptions: { header: null } },
    drawer: { screen: drawerNavigator, navigationOptions: { header: null } },
    profile: { screen: profile, navigationOptions: { header: null } },
    tab: { screen: tabNavigator, navigationOptions: { header: null } },
  },
  {
    initialRouteName: 'login'
  }
);
export default createAppContainer(stackNavigator);
