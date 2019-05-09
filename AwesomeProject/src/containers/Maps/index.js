import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, OverlayComponent } from 'react-native-maps';
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
					title: 'Amit',
					subtitle: '1234 Foo Drive',
					coordinate: {
						latitude: 30.7046,
						longitude: 76.7179
					}
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
								draggable
								coordinate={marker.coordinate}
								onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
								title={marker.title}
							/>
						))}
					</MapView>
					<OverlayComponent style={{ position: 'absolute', bottom: 50 }} />
				</View>
			</SafeAreaView>
		);
	}
}
