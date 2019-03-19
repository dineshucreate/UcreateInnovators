import React, { PureComponent } from 'react';
import { Text, View, Image, Button } from 'react-native';
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

    _handleButtonPress = () => {
        ImagePicker.openPicker({
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
                        <Button title="Load Images" onPress={this._handleButtonPress} />
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