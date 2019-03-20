import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-navigation';
import ImagePicker from 'react-native-image-crop-picker';

class Home extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            photos: [],
            path: "",
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
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText} >Home</Text>
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