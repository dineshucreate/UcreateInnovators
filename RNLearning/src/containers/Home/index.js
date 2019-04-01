import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-navigation';
import ImagePicker from 'react-native-image-crop-picker';
import DatePicker from 'react-native-datepicker'

class Home extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            photos: [],
            path: "",
            date: '',
        }
    }

    _handleOpenLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            this.setState({ path: image.path });
        });
    };

    _handleOpenCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            this.setState({ path: image.path });
        });
    };

    render() {
        const {path} = this.state
        return (
            <SafeAreaView style={styles.mainContainer}>
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
                            onDateChange={(date) => { this.setState({ date: date }) }}
                            /> 
                    </View>
                    <View style={styles.photosContainer}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={this._handleOpenLibrary} >
                            <Text style={styles.buttonText} >Open Gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle} onPress={this._handleOpenCamera} >
                            <Text style={styles.buttonText} >Open Camera</Text>
                        </TouchableOpacity>
                        <Image
                            style={styles.image}
                            source={{ uri: path }}
                        />
                    </View>
                </View>
            </SafeAreaView >
        );
    }
}

export default Home;