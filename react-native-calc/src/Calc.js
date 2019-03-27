import React from 'react'
import { View, Text, TextInput, NativeModules, TouchableOpacity } from 'react-native';

class Calculator extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            value1: '',
            value2: '',
            result: ''
        }
    }
    render() {
        const { value1, value2, result } = this.state;

        return (
            <View style={{ margin: 20, alignItems: 'center' }}>
                <TextInput
                    style={{ width: 100, height: 40 }}
                    placeholder={'Enter value'}
                    value={value1}
                    onChangeText={(text) => this.setState({ value1: text })}
                />
                <Text>+</Text>
                <TextInput
                    style={{ width: 100, height: 40 }}
                    placeholder={'Enter value'}
                    value={value2}

                    onChangeText={(text) => this.setState({ value2: text })}
                />
                <Text>Result is : {result}</Text>

                <TouchableOpacity
                    onPress={() => NativeModules.rnCalc.sum(parseInt(value1), parseInt(value2), (resultsum) => {
                        this.setState({ result: resultsum })
                    })}
                >
                    <Text>ADD</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
export default Calculator;
