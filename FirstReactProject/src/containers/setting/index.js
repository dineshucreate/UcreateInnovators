import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ActivityIndicator, Button, Alert, ImageBackground, Image, ScrollView, TextInput, InputAccessoryView, TouchableHighlight, TouchableOpacity, FlatList } from 'react-native';
import styles from './style';

class setting extends Component {
    render() {
        return (
            <ScrollView style = {styles.mainView}>
                <Text>Setting scren</Text>
            </ScrollView>
        );
    }
}
export default setting;