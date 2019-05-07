import React, { Component } from 'react'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import styles from './style'
import BackgroundImage from '../../component/backgroundImage'
import { SafeAreaView } from 'react-navigation';
import Modal from "react-native-modal";
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Select Avatar',
    // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export default class Home extends Component {

    state = {
        isModalVisible: true,
        avatarSource: ''
    };
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    openCamera = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
            }
        });

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
                        <TouchableOpacity style={styles.menuButton} onPress={this.openCamera}>
                            <Image style={styles.facebookIcon} source={require('../../assets/images/camera_icon.png')} />
                        </TouchableOpacity>
                    </View>
                    <Image style={{ height: 200, width: 200, marginTop: 50, alignSelf: 'center' }}
                        source={this.state.avatarSource} />
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



