import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity} from 'react-native';
import {backgroundImage, logoWhite} from '../../assets/images/images'
export default class Authenticate extends Component {
    constructor() {
        super()
    }
    render() {
        const {navigation} = this.props;
        val1 = navigation.getParam('val1')
        return(
            <ImageBackground source={backgroundImage} style={styles.image}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Home')}}><Text>Go back with value {val1}</Text></TouchableOpacity>
           </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    image : {
      flex:1,
      width:'100%',
      height:'100%',
      justifyContent:'center',
      resizeMode: 'contain'
    }
})