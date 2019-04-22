import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BackgroundImage from '../../component/backgroundImage';
import styles from './style';
import { SafeAreaView } from 'react-navigation';

export default class News extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#06878A' }}>
                <BackgroundImage>
                    <View style={styles.headerVIew}>
                        <View style={{ position: 'absolute', width: '100%', justifyContent: 'center' }}>
                            <Text style={styles.headerText}>News</Text>
                        </View>
                    </View>
                </BackgroundImage >
            </SafeAreaView>
        );
    }
}