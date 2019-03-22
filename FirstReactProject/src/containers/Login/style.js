import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#f00ff0',
    },
    welcome: {
      fontSize: 30,
      textAlign: 'center',
      marginTop: 100,
      color: '#3F4E85',
      marginBottom: 60,
      fontWeight : 'bold'
    },
    heading: {
      fontSize: 20,
      width: 225,
      marginTop: 20,
      color: '#000000'
    },
    input: {
      margin: 10,
      height: 40,
      width: 225,
      borderColor: '#7a42f4',
      borderWidth: 1,
      padding: 10
   },
    buttonStyle:{
      fontSize: 30,
      marginTop: 50,
      color: '#3F4E85',
      backgroundColor: '#ff00ff'
    }
  });