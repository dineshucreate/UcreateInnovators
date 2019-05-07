import React, { Component } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import styles from './style';
import HeaderView from '../../components/HeaderView/Header';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class Settings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDateTimePickerVisible: false
		};
	}
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}
	onPress = () => {
		console.log('callled me');
	};

	showDateTimePicker = () => {
		this.setState({ isDateTimePickerVisible: true });
	};

	hideDateTimePicker = () => {
		this.setState({ isDateTimePickerVisible: false });
	};

	handleDatePicked = (date) => {
		console.log('A date has been picked: ', date);
		this.hideDateTimePicker();
	};

	drawerOpen = () => {
		this.props.navigation.toggleDrawer();
	};

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<HeaderView headerTitle={'Settings'} onClickIcon={this.drawerOpen} />
				<View style={styles.container}>
					<Text> Settings </Text>
					<Button style={styles.button} title="Show DatePicker" onPress={this.showDateTimePicker} />
					<DateTimePicker
						isVisible={this.state.isDateTimePickerVisible}
						onConfirm={this.handleDatePicked}
						onCancel={this.hideDateTimePicker}
					/>
				</View>
			</SafeAreaView>
		);
	}
}
