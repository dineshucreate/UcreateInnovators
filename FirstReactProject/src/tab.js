import { createBottomTabNavigator } from 'react-navigation';
import { Home } from './containers';

  const tabNavigator = createBottomTabNavigator({
    HomeScreen: Home,
    Home
  });
export default tabNavigator;

