import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class BackButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.backButton} onPress={this.props.backPress}>
                <Image style={styles.backImage} source={require('../assets/images/back.png')} />
                <Text style={styles.backText}>{this.props.name}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    backButton: {
        marginTop: 44,
        height: 40,
        width: 110,
        flexDirection: 'row',
    },
    backImage: {
        height: 30,
        width: 30,
        marginLeft: 15,
        alignSelf: 'center',
    },
    backText: {
        alignSelf: 'center',
        marginLeft: 8,
        fontFamily: 'rajdhani-regular',
        fontSize: 18,
        color: '#A5E26A',
    }
});