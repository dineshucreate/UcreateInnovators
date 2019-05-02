import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class HomeScreen extends React.Component {

    render() {
        return (
            <View style={HomeStyle.container}>
                <Text style={{ fontSize: 40 }}>WELCOME ON {'\n'}HOME SCREEN</Text>
            </View>
        );
    }
}

const HomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});