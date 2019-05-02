/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { createStackNavigator, createAppContainer } from "react-navigation";
import SplashScreen from "./src/containers/Splash/SplashScreen";
import HomeScreen from "./src/containers/Home/HomeScreen";

const Apps = createStackNavigator(
  {
    Loading: SplashScreen,
    Home: HomeScreen
  },
  {

    initialRouteName: 'Loading'
  }
);

export default createAppContainer(Apps);