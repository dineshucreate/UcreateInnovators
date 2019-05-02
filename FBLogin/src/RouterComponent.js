
import { createStackNavigator, 
         createAppContainer,  
        } from 'react-navigation';
import Home from './Home';
import FB from './FB';

const Components = {
    home: {
        screen: Home,
        navigationOptions: () => ({
            title: 'Learning',
            headerStyle: {
                backgroundColor: 'blue'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                color: 'white',
                alignSelf: 'center',
                textAlign: 'center'
            },
        })
    },
    fb: {
        screen: FB,
        navigationOptions: () => ({
            title: 'FB',
            headerStyle: {
                backgroundColor: 'blue'
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

export default createAppContainer(AuthStack);

