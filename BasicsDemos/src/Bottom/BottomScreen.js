import React from 'react';
import {Text, View,Image,backgroundColor} from 'react-native';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import StatsScreen from './StatsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatScreen from './ChatScreen';
import NewsScreen from './NewsScreen';

class LiveScreen extends React.Component {
  
  static navigationOptions = {
    header: null // !!! Hide Header
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}


const TabNavigator = createBottomTabNavigator({
    Live: { screen: LiveScreen,navigationOptions:{
      header:null
    } },
    Stats: { screen: StatsScreen },
    Chat:{screen:ChatScreen},
    News:{screen: NewsScreen},
  },
 
  {
    defaultNavigationOptions: ({ navigation }) => ({
    
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Live') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
        //  IconComponent = HomeIconWithBadge; 
        
        return <Image source={require('../assets/ic_live.png')} style={{width:30, height:26, tintColor:tintColor}} />;
     
        } else if (routeName === 'Stats') {
          return <Image source={require('../assets/ic_stats.png')} style={{width:30, height:26, tintColor: tintColor}} />;
        }else if(routeName === 'Chat'){
          return <Image source={require('../assets/ic_chat.png')} style={{width:30, height:26, tintColor:tintColor}} />;
        }else if(routeName === 'News'){
          return <Image source={require('../assets/ic_news.png')} style={{width:30, height:26, tintColor:tintColor}} />;
        }

        // You can return any component that you like here!
       
      },
      navigationOptions:{ header:{ visible:false }}
    }),
    tabBarOptions: {
      activeTintColor: '#AEE675',
      inactiveTintColor: '#fff',
    style:{
      backgroundColor:'#096B76'
    },
    navigationOptions:{
      header:{visible:false}
    }
    },
  });
  
  export default createAppContainer(TabNavigator);