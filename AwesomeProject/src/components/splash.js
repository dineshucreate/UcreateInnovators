import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

export default class Splash extends Component {
    render() {
        return (
            <SafeAreaView style = {styles.safeArea}>
                <View style={styles.container}>
                    <Text style={styles.title}></Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textColor: 'black'
    }, 
    safeArea: {
        flex: 1,
        backgroundColor: '#ddd'
      },
})