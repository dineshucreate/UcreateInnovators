import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class FirstScreen extends Component {


  launchNext = () => {
    this.props.navigation.navigate('third');
  }

  render() {
    return (
      <View style={myStyles.MainContainer}>
        <Text>Karan Nassa Ucreate</Text>
        <TouchableOpacity onPress={this.launchNext}>
          <Text>Click </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const myStyles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f1f1f0',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor: '#ff0000',
  }
});