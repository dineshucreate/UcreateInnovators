import React, { Component } from 'react';
import { Text, View, FlatList, Image, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './style';
import homeModel from '../../models/home';
import HeaderView from '../../components/Header';

export default class home extends Component {
	static navigationOptions = {
		title: 'Home'
	};
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			loading: false,
			arrList: [],
			error: null,
			employeeObject: { name: 'Rohhiitt', age: '30', salary: '500000' }
		};
	}

	componentDidMount() {
		this.makeRemoteRequest();
		setTimeout(() => {
			this.setState({
				name: 'halip'
			});
		}, 30000);
	}

	componentDidUpdate() {
		console.log('componentDidUpdate');
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
				<HeaderView headerTitle={'Home'} />
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
