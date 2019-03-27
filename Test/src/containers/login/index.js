import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity} from 'react-native';
import {backgroundImage, logoWhite} from '../../assets/images/images'
import CustomText from '../../components/Text/CustomText'
export default class Login extends Component {
  async test1() {
    const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
    const json = await response.json();
    alert(json[0])
  }
  componentWillMount () {
    this.props.navigation.navigate('Home')
    let arrUsers = [
      1,2,3,4,5
    ]
    // arrUsers.forEach(test)
}


    render() {
      return (
        <ImageBackground source={backgroundImage} style={styles.image}>
         <View style={styles.innerContent}>
          <Image source={logoWhite} style={styles.innerLogo}/>
          <TouchableOpacity style={styles.buttonBackground1} onPress={() => this.test1()}><Text style={styles.button1}>CREATE AN ACCOUNT</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonBackground2} onPress={() => {this.props.navigation.navigate('Home',
          {'val1':'1'}
          )}}><Text style={styles.button2}>LOG IN</Text></TouchableOpacity>
          </View> 
        </ImageBackground>
      );
    }
  }

  const styles = StyleSheet.create({
      image : {
        flex:1,
        resizeMode: 'contain',
        justifyContent:'center',
        alignItems:'center',
      },
      innerContent:{
        flex:0.4,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
      },
      innerLogo:{
        width:'50%',
        height:'53%',
        resizeMode: 'contain',
        marginBottom:25
      },
      buttonBackground1:{
        backgroundColor:'#096B76',
        width:'auto',
        height:35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 2,
        paddingLeft:10,
        paddingRight:10,
        marginBottom:10
      },
      buttonBackground2:{
        width:160,
        height:35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 2,
      },
      button1:{
        color:'white',
        fontFamily:'Rajdhani-Semibold',
        fontSize:18
      },
      button2:{
        color:'#096B76',
        fontFamily:'Rajdhani-Semibold',
        fontSize:18
      }
  })