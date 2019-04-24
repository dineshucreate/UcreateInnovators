import React from 'react';
import { Text, View } from 'react-native';
import {createStackNavigator, createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';
import FixtureScreen from '../tabs/FixtureScreen';
import LatestScreen from '../tabs/LatestScreen';
import TableScreen from '../tabs/TableScreen';

const TabScreen = createMaterialTopTabNavigator({
  fixture: {screen: FixtureScreen},
  latest: {screen: LatestScreen},
  table : {screen: TableScreen},
},
  {
    tabBarOptions:'center',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions:{
      activeTintColor: '#AEE675',
      inactiveTintColor: '#fff',
      style:{
        backgroundColor:'#096B76'
      }
    }
  }
)

const StatsScreen = createStackNavigator({
 
  TabScreen: {
    screen: TabScreen,
    navigationOptions:{
      headerStyle:{
        backgroundColor:'#633689',
      },
      headerTintColor: '#FFFFFF',
      title:'TABExample'
    },
  },
});


//  class StatsScreen extends React.Component {
//     render() {
//       return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text>StatsScreen!</Text>
//         </View>
//       );
//     }
//   }

  export default createAppContainer(StatsScreen)