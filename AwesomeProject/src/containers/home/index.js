import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class home extends Component {
	render() {
		const { navigation } = this.props;
		const user = navigation.getParam('user', 'no user');
		console.log('Home output', user.email);
		return (
			<View>
				<Text> textInComponent </Text>
			</View>
		);
	}
}
