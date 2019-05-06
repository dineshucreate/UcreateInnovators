import React, { Component } from 'react'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import styles from './style'
import BackgroundImage from '../../component/backgroundImage'
import { SafeAreaView } from 'react-navigation';
import Modal from "react-native-modal";

export default class Home extends Component {
    state = {
        isModalVisible: true
    };
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
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
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={styles.modalView}>
                        <Text style={styles.welcomeText}>Welcome to IMF app {'\n'} Click start button to use awesome features!</Text >
                        <TouchableOpacity
                            style={styles.startButton}
                            onPress={this.toggleModal}
                            activeOpacity={0.7} >
                            <Text style={styles.startButtonText}>Start</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </SafeAreaView >
        );
    }
}



