import React from 'react';
import { View, Text, TouchableOpacity, NativeModules, TextInput } from 'react-native';
import Calculator from '../../node_modules/react-native-react-native-calc/src/Calc';

const { RNReactNativeCalc } = NativeModules;
class NativeCall extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', marginTop: 40 }}>
                <Text>{this.state.value}</Text>
                
                <TouchableOpacity
                    onPress={() => RNReactNativeCalc.sum(10, 10, (sum) => {
                        this.setState({ value: sum })
                    })}
                >
                    <Text>Click Me!</Text>
                </TouchableOpacity>



                <TextInput
                    style={{ width: 100, height: 40 }}
                    placeholder={'Enter value'}
                    value={this.state.value}

                    onChangeText={(text) => this.setState({ value: text })}
                />

                <Calculator />
            </View>
        );
    }
}
export default NativeCall;