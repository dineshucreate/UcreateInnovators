import { createStackNavigator, createAppContainer } from 'react-navigation';
import SettingScreen from './src/SettingScreen';
import Login from './src/container/login';
import PractiseFlatList from './src/container/practiseflatlist';
import SplashScreen from './src/container/splash';

const MainNavigator = createStackNavigator({
  SplashScreen: { screen: SplashScreen },
  Login: { screen: Login },
  PractiseFlatList: { screen: PractiseFlatList },
  Setting: { screen: SettingScreen },
});
const App = createAppContainer(MainNavigator);

export default App;