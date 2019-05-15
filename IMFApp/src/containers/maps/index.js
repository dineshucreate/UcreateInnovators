import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-navigation';
import MapView, { PROVIDER_GOOGLE, Marker, OverlayComponent } from 'react-native-maps';

export default class maps extends Component {
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
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#06878A' }}>
                <View style={styles.headerVIew}>
                    <TouchableOpacity style={styles.menuButton} onPress={() => {
                        this.props.navigation.toggleDrawer();
                    }}>
                        <Image style={styles.facebookIcon} source={require('../../assets/images/stats-tabbar.png')} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>maps</Text>
                    <Text style={styles.blankText}>aa</Text>
                </View>
                <View style={styles.mapView}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.mapView}
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
                </View>
            </SafeAreaView>
        );
    }
}