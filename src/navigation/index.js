import { createStackNavigator, createAppContainer} from 'react-navigation';
import Home from '../container/home';
import Login from '../container/login';
const Navigator = createStackNavigator({
    Login,
    Home
  });
  
  export default createAppContainer(Navigator);