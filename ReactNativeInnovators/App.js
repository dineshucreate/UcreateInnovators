import {createStackNavigator, createAppContainer} from 'react-navigation';
import SettingScreen from './src/SettingScreen';
import Login from './src/container/login';
import PractiseFlatList from './src/container/practiseflatlist';


const MainNavigator = createStackNavigator({
  PractiseFlatList:{screen: PractiseFlatList},
  Login: {screen: Login},
  Setting:{screen: SettingScreen},
 
  
});

const App = createAppContainer(MainNavigator);

export default App;