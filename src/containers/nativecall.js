import React from 'react';
import { View, Text, TouchableOpacity, NativeModules } from 'react-native';
const { Calc } = NativeModules;
class NativeCall extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <View>
                <Text>{this.state.value}</Text>
                <TouchableOpacity
                    onPress={() => Calc.sum(10, 10, (sum) => {
                        this.setState({ value: sum })
                    })}
                >
                    <Text>Click Me!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default NativeCall;