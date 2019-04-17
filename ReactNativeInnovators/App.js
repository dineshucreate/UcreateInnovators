import {createStackNavigator, createAppContainer} from 'react-navigation';
import SettingScreen from './src/SettingScreen';
import Login from './src/container/login';
import PractiseFlatList from './src/container/practiseflatlist';


const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  Setting:{screen: SettingScreen},
  PractiseFlatList:{screen: PractiseFlatList},
  
});

const App = createAppContainer(MainNavigator);

export default App;