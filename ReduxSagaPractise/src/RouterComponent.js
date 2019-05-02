
import { createStackNavigator, 
    createAppContainer,  
    createSwitchNavigator, 
    createDrawerNavigator } from 'react-navigation';

    import login from './containers/Login/index'
    import dashboard from './containers/dasboard/index'
    import modelExample from './containers/modelPractise/index'

    const AuthStack = createStackNavigator(
        {
            login: {
                screen: login,
                navigationOptions: () => ({
                    header: null,
                })
            },
            modelExample:{
               screen: modelExample,
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