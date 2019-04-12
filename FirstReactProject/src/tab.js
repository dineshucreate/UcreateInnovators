import { createBottomTabNavigator } from 'react-navigation';
import { profile, setting } from './containers';
import stack from './stack';

  const tabNavigator = createBottomTabNavigator({
    LoginScreen: stack.stackNavigator,
    SettingScreen: setting,
    ProfileScreen: profile
    
  });
export default tabNavigator;

