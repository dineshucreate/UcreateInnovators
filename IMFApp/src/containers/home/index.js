import React, { Component } from 'react'
import { TouchableOpacity, Text, View, Image, Dimensions } from 'react-native'
import styles from './style'
import BackgroundImage from '../../component/backgroundImage'
import { SafeAreaView } from 'react-navigation';
import Modal from "react-native-modal";
import ImagePicker from 'react-native-image-picker';
import ImageZoom from 'react-native-image-pan-zoom';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

const options = {
    title: 'Select Avatar',
};

const imageSize = (Dimensions.get('window').width) - 50

export default class Home extends Component {
    state = {
        isModalVisible: true,
        avatarSource: '',
        dateTime: '',
        isDateTimePickerVisible: false
    };
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    //Date Picker :
    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };
    handleDatePicked = date => {
        const momentObj = moment(date);
        const momentString = momentObj.format('YYYY-MM-DD');
        this.setState({ dateTime: momentString });
        console.log('A date has been picked: ', date);

        this.hideDateTimePicker();
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
                    <View style={{ height: 44, marginTop: 20, flexDirection: 'row', }}>
                        <TouchableOpacity style={{ alignSelf: 'center', marginLeft: 20, }} onPress={this.showDateTimePicker}>
                            <Text style={{ fontSize: 22, fontFamily: 'Rajdhani-Bold', color: 'white' }}>Select Date :</Text>
                        </TouchableOpacity>
                        <Text style={{
                            alignSelf: 'center', fontSize: 18, fontFamily: 'Rajdhani-semibold',
                            color: 'white', marginLeft: 10, width: (Dimensions.get('window').width) - 120
                        }}>{this.state.dateTime}</Text>
                    </View>
                    <ImageZoom style={{ marginTop: 20, alignSelf: 'center' }} cropWidth={imageSize}
                        cropHeight={imageSize}
                        imageWidth={imageSize}
                        imageHeight={imageSize}  >
                        <Image style={{ width: imageSize - 80, height: imageSize - 80, alignSelf: 'center', marginTop: 40, }}
                            source={this.state.avatarSource} />
                    </ImageZoom>
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
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                />
            </SafeAreaView >
        );
    }
}





