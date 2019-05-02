/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { createStackNavigator, createAppContainer } from "react-navigation";
import FirstScreen from './src/containers/First/FirstScreen';
import ThirdScreen from "./src/containers/Third/ThirdScreen";

const Apps = createStackNavigator(
  {
    Home: FirstScreen,
    third: ThirdScreen,
  },
  // },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(Apps);