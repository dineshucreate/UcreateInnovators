import { createBottomTabNavigator } from 'react-navigation';
import { profile, Home } from './containers';

  const tabNavigator = createBottomTabNavigator({
    HomeScreen: Home,
    ProfileScreen: profile
  });
export default tabNavigator;

