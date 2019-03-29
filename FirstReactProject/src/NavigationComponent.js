

import { createStackNavigator } from 'react-navigation';
import Login from '../src/containers/Login';
import Home from '../src/containers/Home';
import ListItem from '../src/Components/ListItem';

const navigator = createStackNavigator(
  {
    login: Login,
    home: Home,
    listItem: ListItem
  },
  {
    initialRouteName : 'login'
  }
  
);
export default navigator;




