import React, { Component } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';
import styles from './style';
import ImagePicker from 'react-native-image-picker';

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
	home = () => {
		const { navigation } = this.props.navigation;
	};

	profile = () => {
		const { navigation } = this.props.navigation;
	};

	logout = () => {
		const { navigation } = this.props.navigation;
	};

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
							<TouchableOpacity onPress={this.home} style={styles.sideMenuButtons}>
								<Text style={styles.buttonText}>Home</Text>
							</TouchableOpacity>
							<View style={styles.separatorsView} />
							<TouchableOpacity onPress={this.profile} style={styles.sideMenuButtons}>
								<Text style={styles.buttonText}>Profile</Text>
							</TouchableOpacity>
							<View style={styles.separatorsView} />
							<TouchableOpacity onPress={this.logout} style={styles.sideMenuButtons}>
								<Text style={styles.buttonText}>Logout</Text>
							</TouchableOpacity>
						</View>
					</ScrollView>
				</SafeAreaView>
			</View>
		);
	}
}
