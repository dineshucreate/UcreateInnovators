import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, View, AsyncStorage } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import BackgroundImage from '../../component/backgroundImage'
import styles from './style';

export default class SidePanel extends Component {
  clearData = async () => {
    try {
      await AsyncStorage.removeItem('userData');
    } catch (error) {
      // Error saving data 
    }
  };
  homePress = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };
  statsPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Stats');
  };
  newsPress = () => {
    const { navigation } = this.props;
    navigation.navigate('News');
  };
  friendsPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Friends');

  };
  fanmojiesPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Fanmojies');

  };
  logoutPress = () => {
    this.clearData();
    const { navigation } = this.props;
    navigation.navigate('Landing');
  };
  render() {
    return (
      <BackgroundImage>
        <SafeAreaView>
          <View style={styles.userView}>
            <Image style={styles.userIcon} source={require('../../assets/images/Placeholder_Sticker_Image.png')} />
            <Text style={styles.userName}>Jaspreet Singh</Text>
          </View>
          <View style={styles.sectionOneView} >
            <TouchableOpacity style={styles.touchableOpacityStyle} onPress={this.friendsPress}>
              <Text style={styles.textButtons}>Friends</Text>
              <Image style={styles.arrowImage} source={require('../../assets/images/frontArrow.png')} />
            </TouchableOpacity>
            <View style={styles.lineView} />
            <TouchableOpacity style={styles.touchableOpacityStyle} onPress={this.fanmojiesPress}>
              <Text style={styles.textButtons}>Fanmojies</Text>
              <Image style={styles.arrowImage} source={require('../../assets/images/frontArrow.png')} />
            </TouchableOpacity>

          </View>
          <View style={styles.sectionTwoView}>
            <TouchableOpacity style={styles.touchableOpacityStyle} onPress={this.homePress}>
              <Text style={styles.textButtons}>Home</Text>
              <Image style={styles.arrowImage} source={require('../../assets/images/frontArrow.png')} />
            </TouchableOpacity>
            <View style={styles.lineView} />
            <TouchableOpacity style={styles.touchableOpacityStyle} onPress={this.statsPress}>
              <Text style={styles.textButtons}>Stats</Text>
              <Image style={styles.arrowImage} source={require('../../assets/images/frontArrow.png')} />
            </TouchableOpacity>
            <View style={styles.lineView} />
            <TouchableOpacity style={styles.touchableOpacityStyle} onPress={this.newsPress}>
              <Text style={styles.textButtons}>News</Text>
              <Image style={styles.arrowImage} source={require('../../assets/images/frontArrow.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.sectionThreeView}>
            <TouchableOpacity style={styles.touchableOpacityStyle} onPress={this.logoutPress}>
              <Text style={styles.textButtons}>Logout</Text>
              <Image style={styles.arrowImage} source={require('../../assets/images/frontArrow.png')} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </BackgroundImage>

    )
  };
}