
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground,Button,Alert,TextInput,Image} from 'react-native';
import Buttonlogin from './styling/Button';

class SettingScreen extends React.Component {
    static navigationOptions = {
      header :null
    };

    componentDidMount(){
       console.log('..........componentDidMount........');
       
    }
    componentWillUnmount(){
      console.log('..........componentWillUnMount........');
      
   }

 

    render() {
      const {navigation} = this.props;
      const 
      itemId = navigation.getParam('itemId', 'NO-ID');
     
      return (

<ImageBackground source={require('./assets/global_bg.png')}
           style={styles.containerImage}>
           <View style={{flex:0.8, alignItems:'center', justifyContent:'center'}}>
           <Image style={{width: 250, height: 130, resizeMode:'contain'}}
           source={require('./assets/ic_im_logo.png')}/>
           <Text>itemId: {JSON.stringify(itemId)}</Text>
            
            </View>
         </ImageBackground>


        
      );
    }
  }
  

export default SettingScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
     
    },
    containerImage: {
      flex:1
      },
    welcome: {
      flex:0.8,
      justifyContent:'flex-start',
      alignItems: 'flex-start',
      backgroundColor: "#ffffff",
      width: "90%",
      marginTop:30,
      },
    buttonStyle: {
      marginTop: 10,
      fontSize: 50,
    },
    instructionsThird: {
      //flex: 3,
      backgroundColor: "#590000",
      width: 50,
      height: 50,
    },
    input: {
      margin: 10,
      height: 40,
      width: 300,
     },
     titleText: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#06878A',
      marginLeft:15,
      
    },
    TextShadowStyle:
    {
       textAlign: 'center',
       fontSize: 20,
       textShadowColor: '#05928E',
      color:'#ffffff',
      fontWeight: 'bold',
       textShadowOffset: { width: 0, height: 2 },
       textShadowRadius: 8,
       marginTop:20,
    
    },
  });