import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default class BackgroundImage extends Component {
    render() {
        return (
            <ImageBackground style={styles.backgroundImage} source={require('../assets/images/background.png')}>
                {this.props.children}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    }
});

