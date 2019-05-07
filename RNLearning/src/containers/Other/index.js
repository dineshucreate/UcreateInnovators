import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modalbox';
import styles from './style';

class Other extends PureComponent {

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
                        <Text style={styles.title}>App</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewIn}>
                    <Text style={styles.title}>Other</Text>
                </View>
            </SafeAreaView >
        );
    }
}

export default Other;
