import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { thisTypeAnnotation } from '@babel/types';

class TestComponent extends React.Component {

    state = {
        result: 0,
        username: '',
        password: ''
    }

    sum = (a, b) => {
        return a + b;
    }

    validateInputs = (username, password) => {

        if (username.length === 0) return false;
        else if (password.length === 0) return false;
        else return true;
    }

    fetchData = () => {
        const { username, password } = this.state;
        if (this.validateInputs(username, password)) {
            console.log('..............Data Fetched...........');

        }


    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Sum Value is {this.state.result}</Text>
                <TextInput
                    placeholder={'Username'}
                    onChangeText={(text) => this.setState({ username: text })}
                />
                <TextInput
                    placeholder={'Password'}
                    onChangeText={(text) => this.setState({ password: text })}
                />
                <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10 }} onPress={() => this.fetchData}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default TestComponent;
