import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class TestComponent extends React.Component {

    state = {
        result: 0
    }

    componentDidMount() {
        console.log('...........componentDidMount..............');

    }


    sum = (a, b) => {
        return a + b;
    }

    render() {
        console.log('...........render..............');

        return (
            <View style={{ flex: 1 }}>
                <Text>Sum Value is {this.state.result}</Text>
            </View>
        );
    }
}
export default TestComponent;
