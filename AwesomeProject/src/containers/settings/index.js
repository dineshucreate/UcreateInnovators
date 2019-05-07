import React, { Component } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import styles from './style';
import HeaderView from '../../components/HeaderView/Header';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default class Settings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDateTimePickerVisible: false,
			selectedDate: new Date()
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
		this.setState({
			selectedDate: date
		});
		console.log('A date has been picked: ', date);
		this.hideDateTimePicker();
	};

	drawerOpen = () => {
		this.props.navigation.toggleDrawer();
	};

	render() {
		const day = moment(this.state.selectedDate).format('dddd');
		const date = moment(this.state.selectedDate).format('MMMM D, YYYY');

		return (
			<SafeAreaView style={{ flex: 1 }}>
				<HeaderView headerTitle={'Settings'} onClickIcon={this.drawerOpen} />
				<View style={styles.container}>
					<Text>{day} </Text>
					<Text>{date} </Text>
					<Button style={styles.button} title="Change Date" onPress={this.showDateTimePicker} />
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
