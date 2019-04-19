import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import ImagePicker from 'react-native-image-crop-picker';
import DatePicker from 'react-native-datepicker';
import styles from './style';

class Home extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            photos: [],
            path: '',
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
        return (
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.topBarContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.toggleDrawer()}
                    >
                        <Text style={styles.title}>App</Text>
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
                            onValueChange={(value) => { this.setState({ isSwitchOn: value }); }}
                            value={isSwitchOn}
                            ios_backgroundColor='blue'
                            tintColor='blue'
                            trackColor='blue'
                            thumbColor='grey'
                        />
                    </View>
                    { isSwitchOn &&
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
                    </View>
                    }
                    <Image
                        style={styles.image}
                        source={{ uri: path }}
                    />
                </View>
            </SafeAreaView >
        );
    }
}

export default Home;
