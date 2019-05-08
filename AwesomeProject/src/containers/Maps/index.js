import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './style';
import HeaderView from '../../components/HeaderView/Header';

export default class Maps extends Component {
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
				<HeaderView headerTitle={'Maps'} onClickIcon={this.drawerOpen} />
				<View style={styles.container}>
					<MapView provider={PROVIDER_GOOGLE} style={styles.map} />
				</View>
			</SafeAreaView>
		);
	}
}
