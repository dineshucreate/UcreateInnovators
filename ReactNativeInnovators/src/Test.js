
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Button, Alert, TextInput, Image } from 'react-native';

export default class Test extends Component{
    render(){
        return(
            <View>
                <Text onPress= {this.props.update}> {this.props.name}</Text>
            </View>
        );
    }
}