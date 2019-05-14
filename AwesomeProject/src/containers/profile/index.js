import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from '../profile/style';
import HeaderView from '../../components/HeaderView/Header';
import { connect } from 'react-redux';
import Loader from '../../loader/loader';
import { getPhotosList } from './action';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1
		};
	}

	componentDidMount() {
		const { getPhotosList } = this.props;
		const { page } = this.state;
		getPhotosList(page);
	}

	drawerOpen = () => {
		this.props.navigation.toggleDrawer();
	};

	_keyExtractor = (item, index) => item.id;

	renderSeparator = () => {
		return <View style={styles.itemSeparator} />;
	};

	renderListItem = ({ item }) => (
		<TouchableOpacity onPress={() => this.onPress(item)}>
			<View>
				<Image style={{ width: 375, height: 200 }} source={{ uri: item.url }} />
				<Text style={{ marginTop: 5, fontFamily: 'Rajdhani-Bold' }}>{item.title}</Text>
			</View>
		</TouchableOpacity>
	);

	loadMore = () => {
		this.state.page = this.state.page + 1;
		const { getPhotosList } = this.props;
		const { page } = this.state;
		getPhotosList(page);
	};

	render() {
		const { data } = this.props;
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<HeaderView headerTitle={'Profile'} onClickIcon={this.drawerOpen} />
				<View style={styles.container}>
					<FlatList
						data={data}
						renderItem={this.renderListItem}
						keyExtractor={this._keyExtractor}
						onEndReached={this.loadMore}
						onEndReachedThreshold={0}
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

					{this.props.loading && <Loader loading={this.props.loading} />}
				</View>
			</SafeAreaView>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.profile.loading,
		data: state.profile.dataArray
	};
};

const mapDispatchToProps = (dispatch) => ({
	getPhotosList: (page) => dispatch(getPhotosList(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
