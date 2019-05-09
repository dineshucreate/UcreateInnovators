import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import styles from './style';
import HeaderView from '../../components/HeaderView/Header';

export default class Maps extends Component {
	constructor(props) {
		super(props);
		this.state = {
			markers: [
				{
					latitude: 30.7046,
					longitude: 76.7179,
					title: 'Foo Place',
					subtitle: '1234 Foo Drive'
				}
			]
		};
	}

	drawerOpen = () => {
		this.props.navigation.toggleDrawer();
	};

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<HeaderView headerTitle={'Maps'} onClickIcon={this.drawerOpen} />
				<View style={styles.container}>
					<MapView
						provider={PROVIDER_GOOGLE}
						style={styles.map}
						region={{
							latitude: 30.7046,
							longitude: 76.7179,
							latitudeDelta: 0.015,
							longitudeDelta: 0.0121
						}}
					>
						{this.state.markers.map((marker) => (
							<Marker
								coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
								title={marker.title}
								description={marker.description}
							/>
						))}
					</MapView>
				</View>
			</SafeAreaView>
		);
	}
}
