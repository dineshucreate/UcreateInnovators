/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ImageBackground, TextInput,Button, Alert, TouchableHighlight,TouchableOpacity,
  TouchableNativeFeedback } from 'react-native';
import { tsConstructorType } from '@babel/types';
import { createStackNavigator , createAppContainer, Header} from 'react-navigation';
import ListScreen from './ListScreen';
import { ScrollView } from 'react-native-gesture-handler';
import SearchBar from './SearchBar';
import axios from 'axios';
import {AsyncStorage} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var userId="";
export default class BlinkApp extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { 
  //     text: '' ,
  //     email:"try27@gmail.com",
  //     password:"Android@123"};
    
  // }

  state = {
    text: '' ,
    email:"",
    password:"",
  };
   aray =[];
  _onPressButton(){
    Alert.alert("You have press the button")
  }

  loginApi= ()=>{
   
    try{
      console.log(this.state.email);
    let data = JSON.stringify({
      email: this.state.email,
      password: this.state.password,
    });

    axios.post('https://footballalbum-prod-api.imfootball.me/userapi/api/Auth/Login', data,{
      headers:{
        'Content-Type' : 'application/json',
        'ZUMO-API-VERSION': '2.0.0',
        'Ocp-Apim-Subscription-Key': '6c192d2e80bb49a8b90f6d684cf18b9b',

      }
    }).then(res=>{
      const response = res.data;
      console.log("error===============res",res);
     // alert(JSON.stringify(response));
      console.log("erro",res.status);
      if(res.status==200){
        console.log("erro",res.status);
       userId = res.data.user.userGuid
        this.saveUserId();
       this.navigateToOther();
        console.log("save",saveUserId());
      //  this.props.navigation.navigate('List');
      }
    })
  }catch(err){
    console.log("error===============================D",err);
  }

  }

   saveUserId = async () =>{
    try{
      await AsyncStorage.setItem('userId', userId);
    //  navigateToOther();
    }catch(error){
      console.log("Errer  ", error)

    }
  }



  static navigationOptions={
    header:null
  };

  navigateToOther(){
    const resetAction = NavigationActions.reset({
      index: 1,
      actions: [
      //  NavigationActions.navigate({ routeName: 'Home' }),
        NavigationActions.navigate({ routeName: 'List' })
      ]
    });

    this.props.navigation.dispatch(resetAction);
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
     
      <View style={styles.container}>
        <ImageBackground source={require('./src/assets/global_bg.png')} style={styles.container}>
         
            <Image source={require('./src/assets/ic_im_logo.png')} style={{width:175,height:155, marginTop:30}}></Image>
        <View style={{width:320,height:180, backgroundColor: '#fff', borderRadius:3, marginTop:20}}>
          <TextInput style={styles.inputStyle}
            placeholder={'Email'}
            underlineColorAndroid='#06878A'
            onChangeText={(text) => this.setState({email: text })}></TextInput>

            <TextInput style={styles.inputStyle}
            placeholder={"Password"}
            underlineColorAndroid='#06878A'
            onChangeText={(text)=>this.setState({password: text})}></TextInput>

            <Text style={{color:"#06878A", fontWeight:"bold",margin: 10,fontSize:11}}>Forgot your password?</Text>
          
        </View>
      
<TouchableNativeFeedback
               onPress= {this.loginApi}
            // onPress={()=>{this.props.navigation.navigate('List')}}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''} style={styles.buttons}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </View>
        </TouchableNativeFeedback>

        <Text onPress={()=>{this.props.navigation.navigate('register',{
          itemValue:25,
          titleValue:'Register Screens'
        });
        }}
        style={{color:"#fff", textShadowColor:'#05928E', shadowRadius: 10 ,fontSize:16,fontWeight:'bold', marginTop: 20}}>CREATE AN ACCOUNT</Text>

        </ImageBackground>

      </View>
     
    );
  }
}



// const AppNavigator = createStackNavigator(
//   {
//     Home: BlinkApp,
//     List: ListScreen,
//     search: SearchBar,
//   },
//   {
//   initialRoute : "Home"
//   }
// );

// export default createAppContainer(AppNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
 
  buttons:{
    width:260,
    height:30

  },
  button: {
   // marginBottom: 30,
   // marginTop: 20,
    width: 320,
    height:45,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#06878A',
    borderRadius:3,
  },
  buttonText: {
    padding: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  inputStyle:{
    width:260,
    height:40,
    margin: 10,
    //backgroundColor: 'white',
   
    padding: 5,
     borderRadius: 5 
  }
});
