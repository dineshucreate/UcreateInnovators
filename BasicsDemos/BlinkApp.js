/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class BinkApp extends Component<Props> {
  render() {
    let pic={
      uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
     <ImageBackground source = {require('./src/assets/global_bg.png')} style={styles.container}>
      <Blink style={{fontSize:70}} text="Welcome in Dev World"></Blink>
      </ImageBackground>
      </View>
    );
  }
}

class Blink extends Component{
    constructor(Props){
        super(Props);
        this.state = {isShowingText :true};

        setInterval(()=>(
            this.setState(previousState =>(
                {isShowingText: !previousState.isShowingText}
                
            ))
        ),500);

    }
    render(){
        if(!this.state.isShowingText){
           return null;
        }

        return (
        <Text style={styles.testStyle}>{this.props.text}</Text>
        );
    }
}

const styles = StyleSheet.create({
  container: {
  flex:1,
  justifyContent:"center",
  width:'100%',
  height:'100%',
  alignItems:"center"
  },
  testStyle:{
  color:"#ffffff",
  fontSize:26,
 

  }
});
