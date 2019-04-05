import { createBottomTabNavigator } from 'react-navigation';
import { Login, profile, setting } from './containers';

  const tabNavigator = createBottomTabNavigator ({
    LoginScreen: Login,
    SettingScreen: setting,
    ProfileScreen: profile
    
  });
export default tabNavigator;


