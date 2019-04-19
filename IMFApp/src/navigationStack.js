import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import landing from './containers/landing';
import login from './containers/login';
import signup from './containers/signup';
import home from './containers/home'


const tab = createBottomTabNavigator({
  Login: login,
  Home: home
})

const stackNavigator = createStackNavigator(
  {
    landing: {
      screen: landing, navigationOptions: {
        header: null
      }
    },
    login: {
      screen: login, navigationOptions: {
        header: null
      }
    },
    signup: {
      screen: signup, navigationOptions: {
        header: null
      }
    },
    tab: {
      screen: tab,
      navigationOptions: {
        header: null
      }
    },
  }
);


export default stackNavigator