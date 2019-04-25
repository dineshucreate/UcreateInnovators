import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class index extends Component {
	home = () => {};

	profile = () => {};

	logout = () => {};

	render() {
		return (
			<View>
				<Text> textInComponent </Text>
				<TouchableOpacity onPress={this.home}>
					<Text style={styles.home}>Home</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.profile}>
					<Text style={styles.profile}>Profile</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.logout}>
					<Text style={styles.logout}>Logout</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
