import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HeaderView extends Component {
	render() {
		return (
			<View style={{ height: 60, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
				<Text style={{ fontFamily: 'Rajdhani-Bold', fontSize: 24 }}>{this.props.headerTitle}</Text>
			</View>
		);
	}
}
