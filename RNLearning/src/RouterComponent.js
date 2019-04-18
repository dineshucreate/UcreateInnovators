
import { createStackNavigator, 
         createAppContainer,  
         createSwitchNavigator, 
         createDrawerNavigator } from 'react-navigation';
import Home from './containers/Home';
import Login from './containers/LogIn';
import List from './containers/List';
import { Colors } from './utilities/Colors';
import CustomDrawer from './containers/CustomDrawer';

const Components = {
    login: {
        screen: Login,
        navigationOptions: () => ({
            header: null,
        })
    },
    flatList: {
        screen: List,
        navigationOptions: () => ({
            title: 'FlatList',
            headerStyle: {
                backgroundColor: Colors.baseColor
            },
            headerLeft: null,
            headerTintColor: 'white',
            headerTitleStyle: {
                color: 'white',
                alignSelf: 'center',
                textAlign: 'center'
            },
        })
    },
    home: {
        screen: Home,
        navigationOptions: () => ({
            title: 'Learning',
            headerStyle: {
                backgroundColor: Colors.baseColor
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                color: 'white',
                alignSelf: 'center',
                textAlign: 'center'
            },
        })
    },
};

const AuthStack = createStackNavigator(
    {
        ...Components,
    },
);

const Drawer = createDrawerNavigator(
    {
        ...Components
    },
    {
      drawerBackgroundColor: 'white',
      contentOptions: {
        activeBackgroundColor: Colors.drawerSelected
      },
      contentComponent: CustomDrawer,
      drawerWidth: 200
    }
  );
  
  const SwitchNavigator = createSwitchNavigator({
    drawer: Drawer,
    onboard: AuthStack,
  });

export default createAppContainer(SwitchNavigator);

