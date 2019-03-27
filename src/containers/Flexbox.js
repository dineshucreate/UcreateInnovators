import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RNReactBridgeTesting from '../../node_modules/react-native-bridge-testing';
//import LoginTest from 'react-native-bridge-testing/src/login';
// "react-native-bridge-testing": "github:amanpreet-ucreate/react-native-bridge-testing"

const value = "";
export default class FlexboxExample extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        // NativeModules.PrintLog.PrintLog((err, name) => {
        //     this.setState({ value: name }),
        //         console.log(this.state.value);
        // });
        // NativeModules.PrintLog.exampleMethod(2, 5, (err, name) => {
        //     this.setState({ value: name }),
        //         console.log(this.state.value);
        // });
    }


    render() {

        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* <LoginTest /> */}

                <View style={styles.viewMain}>
                    <View style={styles.viewBlue}>
                        <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', flex: 1, textAlignVertical: 'center' }}>1</Text>
                    </View>
                    <View style={styles.viewGreen}>
                        <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', flex: 1, textAlignVertical: 'center' }}>2</Text>
                    </View>

                    <View style={styles.viewRed}>

                        <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', flex: 1, textAlignVertical: 'center' }}>3</Text>
                    </View>

                </View>
            </View>
        );
    }


}
const styles = StyleSheet.create(
    {
        viewMain: {
           flex:1,
            marginTop: 10,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',

        },
        viewBlue: {
            width: 100,
            height: 100,
            backgroundColor: '#0000ff',
            alignSelf: 'center',
            margin: 5,
        },
        viewGreen: {
            width: 100,
            height: 100,
            backgroundColor: '#00ff00',
            margin: 5,

        },
        viewRed: {
            width: 100,
            height: 100,
            backgroundColor: '#ff0000',
            margin: 5,

        }

    }
);