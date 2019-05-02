import React from "react";
import { View, Text, StyleSheet } from "react-native";


class Splash extends React.Component {
    render() {
        const viewStyles = [
            SplashStyle.container,
            { backgroundColor: 'orange' }
        ];
        const textStyles = {
            color: 'white',
            fontSize: 40,
            fontWeight: 'bold'
        };

        return (
            <View style={SplashStyle.container}>
                <Text onPress={this.loadHome} style={{ fontSize: 40 }}>SPLASH SCREEN</Text>
            </View>
        );
    }
}

export default class SplashScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isLoading: true }
    }

    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => {
                    resolve('result')
                    this.props.navigation.navigate('Home');
                },
                2000
            )
        );
    }

    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.setState({ isLoading: false });
        }
    }

    loadHome = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        if (this.state.isLoading) {
            return <Splash />;
        }

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
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
})