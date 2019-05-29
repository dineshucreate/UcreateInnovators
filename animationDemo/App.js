
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AnimOne from './src/anim_one'

export default class App extends Component {

  

  render() {
    return (
      <View style={styles.container}>
        <AnimOne />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
