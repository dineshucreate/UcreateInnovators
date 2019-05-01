import React, {Component} from 'react';
import{View, Text, StyleSheet} from 'react-native';


export default class SecondScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
            <Text>Welcome to Second Screen</Text>
            </View>
        )
    }
}

const styles  = StyleSheet.create({
    container:{
        flex:1,
    }
})