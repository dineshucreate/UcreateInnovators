

import { createStackNavigator } from 'react-navigation';
import Login from '../src/containers/Login';
import Home from '../src/containers/Home';
const navigator = createStackNavigator(
  {
    login: Login,
    home: Home
  },
  {
    initialRouteName : 'login'
  }
  
);
export default navigator;




