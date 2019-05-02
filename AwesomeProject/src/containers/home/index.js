import React, { Component } from 'react';
import { Text, View, FlatList, Image, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './style';
import homeModel from '../../models/home';
import HeaderView from '../../components/HeaderView/Header';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import Loader from '../../loader/loader';
import { getUserList } from './action';
import { createAppContainer, DrawerActions } from 'react-navigation';

class Home extends Component {
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
		SplashScreen.hide();
		this.makeRemoteRequest();
	}

	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	makeRemoteRequest() {
		const { getUserList } = this.props;
		getUserList();
	}

	onPress = (item) => {
		alert(`Item pressed + ${item.employee_name}`);
	};

	drawerOpen = () => {
		this.props.navigation.toggleDrawer();
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
		// const user = navigation.getParam('user', 'no user');
		return (
			<View style={{ flex: 1 }}>
				<SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
				<SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
					<HeaderView headerTitle={'Home'} onClickIcon={this.drawerOpen} />
					<View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
						<FlatList
							data={this.props.data}
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
					{this.props.loading && <Loader loading={this.props.loading} />}
				</SafeAreaView>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.home.loading,
		data: state.home.data
	};
};
const mapDispatchToProps = (dispatch) => ({
	getUserList: () => dispatch(getUserList())
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
