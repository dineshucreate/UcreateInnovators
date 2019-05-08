import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import ImagePicker from 'react-native-image-crop-picker';
import DatePicker from 'react-native-datepicker';
import ImageViewer from 'react-native-image-zoom-viewer';
import Modal from 'react-native-modalbox';
// import ImageZoom from 'react-native-image-pan-zoom';
import styles from './style';

class Home extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            photos: [],
            path: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
            date: '',
            isSwitchOn: false,
        };
    }

    handleOpenLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            this.setState({ path: image.path });
        });
    };

    handleOpenCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            this.setState({ path: image.path });
        });
    };

    render() {
        const { path, isSwitchOn } = this.state;
        const images = [{
            width: 300,
            height: 300,
            props: {
                source: { uri: path },
            }
        },
        {
            url: 'http://v1.qzone.cc/avatar/201407/07/00/24/53b9782c444ca987.jpg!200x200.jpg',
            width: 300,
            height: 300,
        }];
        
        return (
            <SafeAreaView style={styles.mainContainer}>
                <Modal
                    style={styles.modal}
                    position={'center'}
                    entry='bottom'
                    swipeToClose={false}
                    backButtonClose={false}
                    backdropPressToClose={false}
                    animationDuration={200}
                    ref={'loaderView'}
                >
                    <View style={{ flex: 1 }}>
                        <Text style={styles.modalText}>Singh</Text>
                        <TouchableOpacity
                        onPress={() => this.refs.loaderView.close()}
                        >
                        <Text style={styles.modalText}>Close</Text>
                    </TouchableOpacity>
                    </View>
                </Modal>
                <View style={styles.topBarContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.toggleDrawer()}
                    >
                        <Text style={styles.title}>Menu</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewIn}>
                    <View style={styles.datePickerContainer}>
                        <DatePicker
                            style={styles.datePicker}
                            date={this.state.date}
                            mode="date"
                            placeholder="Select date"
                            format="YYYY-MM-DD"
                            minDate="2012-08-01"
                            maxDate="2029-03-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: styles.dateIcon,
                                dateInput: styles.dateInput,
                                placeholderText: styles.datePlaceholderText,
                            }}
                            onDateChange={(date) => { this.setState({ date }); }}
                        />
                    </View>
                    <View style={styles.switchContainer}>
                        <Switch
                            onValueChange={(value) => { 
                                this.setState({ isSwitchOn: value });
                                if (value === true) {
                                    this.refs.loaderView.open();
                                } else {
                                    this.refs.loaderView.close();
                                }                  
                            }}
                            value={isSwitchOn}
                            ios_backgroundColor='blue'
                            tintColor='blue'
                            trackColor='blue'
                            thumbColor='grey'
                        />
                    </View>
                    {isSwitchOn &&
                        <View style={styles.photosContainer}>
                            <TouchableOpacity
                                style={styles.buttonStyle}
                                onPress={this.handleOpenLibrary}
                            >
                                <Text style={styles.buttonText} >Open Gallery</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonStyle}
                                onPress={this.handleOpenCamera}
                            >
                                <Text style={styles.buttonText} >Open Camera</Text>
                            </TouchableOpacity>
                            <View style={styles.image}>
                                <ImageViewer style={styles.image} imageUrls={images} />
                            </View>
                            {/* <ImageZoom 
                                cropWidth={300}
                                cropHeight={300}
                                imageWidth={300}
                                imageHeight={300}
                            >
                                <Image
                                    style={styles.image}
                                    source={{ uri: path }}
                                />
                            </ImageZoom> */}
                        </View>
                    }
                </View>
            </SafeAreaView >
        );
    }
}

export default Home;
