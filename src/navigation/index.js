// import { createStackNavigator,createAppContainer } from 'react-navigation';
// import Home from '../container/home';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MyFlatList from '../container/flatlist';
import Login from '../container/login';

// *********** Bottom Tab Navigator******************

const TabNavigator = createBottomTabNavigator({
  Login,
  MyFlatList
}, {
    // tabBarOptions: {
    // activeTintColor: 'tomato',
    // activeBackgroundColor: 'darkgreen',
      
    //   inactiveTintColor: 'gray',
    // }
  
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'blue',
      },
    }
  }
);

export default createAppContainer(TabNavigator);



//   *****************begining of Stack Navigation*****************

// const Navigator = createStackNavigator({
//   Login,
//   MyFlatList
// },
//   {
//     /* The header config from HomeScreen is now here */
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: '#f4511e',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }
//   });

// export default createAppContainer(Navigator);