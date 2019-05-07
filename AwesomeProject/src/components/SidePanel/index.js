import React, { Component } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
	Image,
	Dimensions,
	AsyncStorage,
	Alert
} from 'react-native';
import styles from './style';
import ImagePicker from 'react-native-image-picker';
import { DrawerItems } from 'react-navigation';
const height = Dimensions.get('window').height;
const options = {
	title: 'Select Avatar',
	customButtons: [ { name: 'fb', title: 'Choose Photo from Facebook' } ],
	storageOptions: {
		skipBackup: true,
		path: 'images'
	}
};

export default class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			avatarSource: null
		};
	}

	openImagePicker = () => {
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
					avatarSource: source
				});
			}
		});
	};

	render() {
		return (
			<View>
				<SafeAreaView>
					<ScrollView style={{ height: height }}>
						<View>
							<TouchableOpacity onPress={this.openImagePicker}>
								<View style={styles.profileContainer}>
									<View style={styles.profileImageContainer}>
										<Image source={this.state.avatarSource} style={styles.profileImage} />
										{/* <Image source={require('../../assets/0.gif')} style={styles.profileImage} /> */}
									</View>
								</View>
							</TouchableOpacity>
							<DrawerItems {...this.props} />
						</View>
					</ScrollView>
				</SafeAreaView>
			</View>
		);
	}
}
