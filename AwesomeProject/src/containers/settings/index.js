import React, { Component } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from '../profile/style';
import HeaderView from '../../components/HeaderView/Header';

export default class Settings extends Component {
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}
	onPress = () => {
		console.log('callled me');
	};

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<HeaderView headerTitle={'Settings'} />
				<View style={styles.container}>
					<Text> textInComponent </Text>
				</View>
			</SafeAreaView>
		);
	}
}
