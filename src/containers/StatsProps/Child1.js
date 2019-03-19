import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default class Child extends React.PureComponent {


    render() {
        return (
            <View style={{ height:40, backgroundColor:'#334422', justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'#ffffff'}} >{this.props.message}</Text>
            
            </View>
        );
    }
}