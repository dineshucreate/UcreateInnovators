import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
export default class CustomDialogue extends Component {
	state = {
		isModalVisible: false
	};
	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	};
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this.toggleModal} />
				<Modal isVisible={this.state.isModalVisible}>
					<View style={{ flex: 1 }}>
						<Text>Hello!</Text>
						<Button title="Hide modal" onPress={this.toggleModal} />
					</View>
				</Modal>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#ede3f2',
		padding: 100
	},
	modal: {
		flex: 0.5,
		alignItems: 'center',
		backgroundColor: 'white',
		padding: 100,
		justifyContent: 'center',
		marginTop: 200,
		borderRadius: 20
	},
	ok: {
		color: 'black',
		fontSize: 'bold'
	},
	close: {
		color: 'black',
		fontSize: 'bold'
	},
	text: {
		color: '#3f2949',
		marginTop: 10
	}
});
