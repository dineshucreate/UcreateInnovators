import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Child from './Child1';

export default class Parent extends React.PureComponent {
    constructor(){
        super()
        this.state= {
            username: '',
        }
    }
    render() {
        return (
            <View >
                <TextInput
                    style={{backgroundColor:'#002289',color:'#ffffff'}}
                    value={this.state.username}
                    placeholder={'Username'}
                    onChangeText={(text) => this.setState({ username: text })}
                />

            </View>
        );
    }
}