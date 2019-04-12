import { createDrawerNavigator } from 'react-navigation';

import {
  Login,
  Home,
} from './containers';

const drawerNavigator = createDrawerNavigator({
  Login: {
    screen: Login,
  },
  Home: {
    screen: Home,
  },
});
export default drawerNavigator;
