import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

class FirstScreen extends Component{
    launchNext = () => {
        
    } 

    render(){
        return(
            <View style = {Styles.container}>
            <Text>First Screen</Text>
            <TouchableOpacity 
                onPress = {() => this.launchNext() }
            >Open Second Screen</TouchableOpacity>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: row
    }
});