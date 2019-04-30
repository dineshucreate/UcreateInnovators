import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from '../profile/style';
import HeaderView from '../../components/HeaderView/Header';

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	drawerOpen = () => {
		this.props.navigation.toggleDrawer();
	};

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<HeaderView headerTitle={'Profile'} onClickIcon={this.drawerOpen} />
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
