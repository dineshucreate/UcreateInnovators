import { createStackNavigator,createAppContainer } from 'react-navigation';
// import Home from '../container/home';
import MyFlatList from '../container/flatlist';
import Login from '../container/login';
const Navigator = createStackNavigator({
  Login,
  MyFlatList
},
  {
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  });

export default createAppContainer(Navigator);