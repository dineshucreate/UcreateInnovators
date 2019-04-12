import { createStackNavigator, createAppContainer } from 'react-navigation';

import {
  Login,
  Home,
  Detail
} from './containers';

const stackNavigator = createStackNavigator(
  {
    login: Login,
    home: Home,
    detail: Detail
  },
  {
    initialRouteName: 'login'
  }
);
export default Begin = createAppContainer(stackNavigator);
