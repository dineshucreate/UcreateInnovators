import { createStackNavigator } from 'react-navigation';

import {
  login,
  signUp
} from './components';

const stackNavigator = createStackNavigator({
    login: login,
    signUp: signUp
  },{
    initialRouteName: 'login'
  }
);
export default stackNavigator;