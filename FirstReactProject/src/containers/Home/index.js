import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ActivityIndicator, Button, Alert, ImageBackground, Image, ScrollView, TextInput, InputAccessoryView, TouchableHighlight } from 'react-native';
import styles from './style';

class Home extends Component {
    render() {
        const inputAccessoryViewID = "uniqueID";
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Home SCREEN</Text>
                <Text style={styles.heading}>Login</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    value = {navigation.getParam('user','users')}
                />
                <Text style={styles.heading}>Password</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    value = {navigation.getParam('pwd','password')}
                />
                <TouchableHighlight
                    style={{
                        marginTop: 30,

                    }}>
                    <Button onPress={() => {
                         Alert.alert('You tapped the button!');
                        
                    }}
                        title="HOME"
                        color='#000000'
                        fontWeight='bold'
                    />
                </TouchableHighlight>
            </View>
        );
    }
}
export default Home;