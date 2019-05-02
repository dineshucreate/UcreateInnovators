
import { createStackNavigator, 
    createAppContainer,  
    createSwitchNavigator, 
    createDrawerNavigator } from 'react-navigation';

    import login from './containers/Login/index'
    import dashboard from './containers/dasboard/index'

    const AuthStack = createStackNavigator(
        {
            login: {
                screen: login,
                navigationOptions: () => ({
                    header: null,
                })
            },
            dashboard: {
                screen: dashboard,
                navigationOptions: () => ({
                    header: null,
                })
            },
        },
    );

   
    const SwitchNavigator = createSwitchNavigator({
        loginScreen: AuthStack,
      });
    
    export default createAppContainer(SwitchNavigator);