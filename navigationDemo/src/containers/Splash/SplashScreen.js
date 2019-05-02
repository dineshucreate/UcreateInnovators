import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default class SplashScreen extends React.Component {

    loadHome = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={SplashStyle.container}>
                <Text onPress={this.loadHome} style={{ fontSize: 40 }}>SPLASH SCREEN</Text>
            </View>
        );
    }
}

const SplashStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})