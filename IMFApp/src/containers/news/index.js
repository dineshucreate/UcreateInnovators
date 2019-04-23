import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import BackgroundImage from '../../component/backgroundImage';
import styles from './style';
import { SafeAreaView } from 'react-navigation';

export default class News extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#06878A' }}>
                <BackgroundImage>
                    <View style={styles.headerVIew}>
                        <TouchableOpacity style={styles.menuButton} onPress={() => {
                            this.props.navigation.toggleDrawer();
                        }}>
                            <Image style={styles.facebookIcon} source={require('../../assets/images/stats-tabbar.png')} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>News</Text>
                        <Text style={styles.blankText}>aa</Text>
                    </View>
                </BackgroundImage >
            </SafeAreaView>
        );
    }
}