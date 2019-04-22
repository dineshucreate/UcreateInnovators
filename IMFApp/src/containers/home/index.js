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
                    <TouchableOpacity style={styles.facebookButton} onPress={() => {
                        this.props.navigation.toggleDrawer();
                    }}>
                        <Image style={styles.facebookIcon} source={require('../../assets/images/FbIcon.png')} />
                        <Text style={styles.facbookText}>LOG IN WITH FACEBOOK</Text>
                    </TouchableOpacity>
                    <View style={styles.headerVIew}>
                        <View style={{ position: 'absolute', width: '100%', justifyContent: 'center' }}>
                            <Text style={styles.headerText}>Home</Text>
                        </View>
                    </View>
                </BackgroundImage>
            </SafeAreaView >
        );
    }
}



