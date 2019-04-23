import { createDrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import {
  setting,
  profile,
} from './containers';
import tabNavigator from './tab';

const drawerNavigator = createDrawerNavigator({
  tab: {
    screen: tabNavigator,
  },
  temp: {
    screen: profile,
  }
  },
  {
    initialRouteName: 'tab',
    drawerWidth: Dimensions.get('window').width - 100,
    contentComponent: setting
  }
);
export default drawerNavigator;
