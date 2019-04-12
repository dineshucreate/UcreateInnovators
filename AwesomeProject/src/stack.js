import { createStackNavigator } from 'react-navigation';

import {
  login,
  signUp
} from './containers';

const stackNavigator = createStackNavigator({
    login: login,
    signUp: signUp
  },{
    initialRouteName: 'login'
  }
);
export default stackNavigator;