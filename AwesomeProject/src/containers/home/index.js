import React, { Component } from 'react';
import { Text, View, FlatList, Image, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './style';
import homeModel from '../../models/home';

export default class home extends Component {
	static navigationOptions = {
		title: 'Home'
	};
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			arrList: [],
			error: null,
			employeeObject: { name: 'Rohhiitt', age: '30', salary: '500000' }
		};
	}

	componentDidMount() {
		this.makeRemoteRequest();
	}

	makeRemoteRequest() {
		let home = new homeModel();
		this.setState({
			loading: true
		});
		home.getEmployeeList(
			(response) => {
				this.setState({
					arrList: response.data,
					loading: false
				});
			},
			(error) => {
				this.setState({
					error: error,
					loading: false
				});
			}
		);
	}

	onPress = (item) => {
		alert(`Item pressed + ${item.employee_name}`);
	};

	_keyExtractor = (item, index) => item.id;

	renderListItem = ({ item }) => (
		<TouchableOpacity onPress={() => this.onPress(item)}>
			<View style={styles.containerMain}>
				<Image
					style={styles.userImage}
					source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
				/>
				<View style={styles.textView}>
					<Text style={{ marginTop: 5 }}>{item.employee_name}</Text>
					<Text style={{ marginTop: 5, fontFamily: 'Rajdhani-Bold' }}>{item.employee_salary}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);

	renderSeparator = () => {
		return <View style={styles.itemSeparator} />;
	};

	render() {
		const { navigation } = this.props;
		const user = navigation.getParam('user', 'no user');
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<View style={{ height: 60, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
					<Text style={{ fontFamily: 'Rajdhani-Bold', fontSize: 24 }}>Home</Text>
				</View>
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<FlatList
						data={this.state.arrList}
						renderItem={this.renderListItem}
						keyExtractor={this._keyExtractor}
						ItemSeparatorComponent={this.renderSeparator}
						numColumns={2}
					/>
					{this.state.loading && (
						<ActivityIndicator
							style={{
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								position: 'absolute'
							}}
							size="large"
						/>
					)}
				</View>
			</SafeAreaView>
		);
	}
}
