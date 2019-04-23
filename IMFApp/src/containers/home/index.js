import React, { Component } from 'react'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import styles from './style'
import BackgroundImage from '../../component/backgroundImage'
import { SafeAreaView } from 'react-navigation';

export default class Home extends Component {
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
                        <Text style={styles.headerText}>Home</Text>
                        <Text style={styles.blankText}>aa</Text>
                    </View>
                </BackgroundImage>
            </SafeAreaView >
        );
    }
}



