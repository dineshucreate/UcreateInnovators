import { createStackNavigator } from 'react-navigation';

import {
  Login,
  Home,
  Detail 
} from './containers';

const stackNavigator = createStackNavigator(
  {
    login: Login,
    Home: Home,
    detail: Detail
  },
  {
    initialRouteName : 'login'
  }
);
export default {stackNavigator};
