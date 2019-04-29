import React,{Component} from 'react';
import {Text,ImageBackground, Image,View, StyleSheet} from 'react-native';

export default class SignUpAndLoginScreen extends Component{

    render(){
        return(
            <View style={styles.container}>
            <ImageBackground source={require('../assets/global_bg.png')} style = {styles.container}></ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'100%',
    }
})