import React,{Component} from 'react';
import {Text,View,Image, ImageBackground, StyleSheet} from 'react-native';


export default class SelectWorldCupTeamScreen extends React.Component{
    
    render(){
        return(
            <View style={styles.container}>
            <Text>Hello</Text></View>
        );
    }
}

styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    }
})