import React, { Component } from 'react';
import { Text, View, FlatList, Image, SafeAreaView } from 'react-native';
import style from './style';
import homeModel from '../../models/home';

export default class home extends Component {
	static navigationOptions = {
		title: 'Home'
	};
	constructor(props) {
		super(props);
		this.state = {
			arrList: [ { empl: 'Alex', address: 'UK' } ]
		};
	}

	componentDidMount() {
		let home = new homeModel();
		home.getEmployeeList(
			(response) => {
				this.setState({
					arrList: response.data
				});
			},
			(error) => {
				alert('error');
			}
		);
	}

	renderListItem = ({ item }) => (
		<View style={style.containerMain}>
			<Image style={styles.userImage} />
			<View style={styles.textView}>
				<Text style={{ marginTop: 5 }}>{item.employee_name}</Text>
				<Text style={{ marginTop: 5 }}>{item.employee_salary}</Text>
			</View>
		</View>
	);
	render() {
		const { navigation } = this.props;
		const user = navigation.getParam('user', 'no user');
		return (
			<SafeAreaView>
				<View>
					<FlatList
						//contentContainerStyle={styles.containerMain}
						data={this.state.arrList}
						renderItem={this.renderListItem}
					/>
				</View>
			</SafeAreaView>
		);
	}
}
