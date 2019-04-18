import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../profile/style';
export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.container}>
					<Text> textInComponent </Text>
					<TouchableOpacity style={styles.buttonContainer} onPress={this.onPress}>
						<Text style={styles.buttonText}>SIGN IN</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		);
	}
}
