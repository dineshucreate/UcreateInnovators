import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/HomeScreen';
import SettingScreen from './src/SettingScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Setting:{screen: SettingScreen},
  
});

const App = createAppContainer(MainNavigator);

export default App;