import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import List from '../List';
import Other from '../Other';
import { Colors } from '../../utilities/Colors';
import { styles } from './style';
import images from '../../assets/images';

const tabBarIcons = (navigation, horizontal, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  switch (routeName) {
    case 'Flatlist':
      iconName = images.stats;
      break;
    case 'Other':
      iconName = images.news;
      break;
    default:
      break;
  }
  // You can return any component that you like here! We usually use an
  // icon component from react-native-vector-icons
  return (
    <Image
      style={[styles.tabIconStyle, { tintColor }]}
      source={iconName}
    />
  );
};
const tabNavigation = ({ navigation }) => ({
  tabBarIcon: ({ horizontal, tintColor }) => tabBarIcons(navigation, horizontal, tintColor),
});
const TabNavigator = createBottomTabNavigator(
  {
    Flatlist: { screen: List },
    Other: { screen: Other },
  },
  {
    defaultNavigationOptions: tabNavigation,
    tabBarOptions: {
      activeTintColor: '#A7E175',
      inactiveTintColor: Colors.White,
      style: {
        paddingBottom: 4.5,
        backgroundColor: '#24717B',
        height: 55,
      },
      labelStyle: {
        paddingTop: -2.5,
        fontWeight: '500',
      },
    },
  }
);
export default createAppContainer(TabNavigator);
