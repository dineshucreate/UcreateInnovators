import { createStackNavigator } from 'react-navigation';
import landing from './containers/landing';
import login from './containers/login';
import signup from './containers/signup';

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
    }
  },
  {
    initialRouteName: 'landing'
  }
);
export default stackNavigator