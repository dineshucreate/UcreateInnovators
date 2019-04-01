import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './containers/Home';
import Login from './containers/LogIn';
import List from './containers/List';
import { Colors } from './utilities/Colors';

const AuthStack = createStackNavigator(
    {
        home: {
            screen: Home,
            navigationOptions: ({ navigation }) => ({
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
        flatList: {
            screen: List,
            navigationOptions: ({ navigation }) => ({
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
        login: {
            screen: Login,
            navigationOptions: ({ navigation }) => ({
                header: null,
            })
        },
    },
    {
      initialRouteName : 'home'
    }
);
export default Begin = createAppContainer(AuthStack);
