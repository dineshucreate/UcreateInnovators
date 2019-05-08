
import { createStackNavigator, 
    createAppContainer,  
    createSwitchNavigator } from 'react-navigation';

    import loginRedux from './src/reduxPractice/index';


    const AuthStack = createStackNavigator(
        {
            loginRedux: {
                screen: loginRedux,
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