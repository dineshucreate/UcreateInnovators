import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './containers/Home';
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
    },
    {
      initialRouteName : 'home'
    }
);
export default Begin = createAppContainer(AuthStack);
