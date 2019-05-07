import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions, TextInput, TouchableOpacity, Platform, Alert, PermissionsAndroid } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Callout, Marker, AnimatedRegion, Polyline, MarkerAnimated } from 'react-native-maps';
import haversine from 'haversine';
import LocationSwitch from 'react-native-location-switch';
import Geocoder from 'react-native-geocoder';
import MapViewDirections from 'react-native-maps-directions';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


class GooglemapIntegration extends Component {
    constructor() {
        super();
        this.state = {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            region: new AnimatedRegion({
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }),
            routeCoordinates: [],
            distanceTravelled: 0,
            prevLatLng: {},
            address: '',
            markers: [{
                title: 'Marker1',
                coordinates: {
                    latitude: 30.6982089,
                    longitude: 76.6907082
                },
            },
            {
                title: 'Marker 2',
                coordinates: {
                    latitude: 30.68212089,
                    longitude: 76.7176607082
                },
            }]
        };
    }
    getMapRegion = () => ({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    });
    calcDistance = newLatLng => {
        const { prevLatLng } = this.state;
        return haversine(prevLatLng, newLatLng) || 0;
    };

    animate() {
        const { coordinate, latitude, longitude } = this.state;
        const newCoordinate = {
            latitude: latitude + ((Math.random() - 0.5) * (LATITUDE_DELTA / 2)),
            longitude: longitude + ((Math.random() - 0.5) * (LONGITUDE_DELTA / 2)),
        };

        if (Platform.OS === 'android') {
            if (this.refs.marker) {
                this.refs.marker._component.animateMarkerToCoordinate(newCoordinate, 500);
            }
        } else {
            coordinate.timing(newCoordinate).start();
        }
    }


    updateRegion = (position) => {
        console.log(`position: ${position}`);

        const { latitude, longitude } = position.coords;
        console.log(`Latlng: ${latitude}   ${longitude}`);

        const newCoordinate = {
            latitude,
            longitude
        };
        try {
            if (Platform.OS === "android") {
                if (this.refs.marker) {
                    this.refs.marker._component.animateMarkerToCoordinate(
                        newCoordinate,
                        500
                    );
                }
            } else {
                region.timing(newCoordinate).start();
            }
            this.setState({
                latitude,
                longitude,
                region: {
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                },
                routeCoordinates: this.state.routeCoordinates.concat([newCoordinate]),
                distanceTravelled: this.state.distanceTravelled + this.calcDistance(newCoordinate),
                prevLatLng: newCoordinate,

            });
        } catch (error) {
            console.log(error);

        }

    }

    componentDidMount() {
        PermissionsAndroid.request("android.permission.ACCESS_FINE_LOCATION").then((resp) => {
            console.log('Response ' + JSON.stringify(resp));

        }).catch((error) => console.log('error:  ' + error)
        );
        LocationSwitch.isLocationEnabled(
            () =>
                LocationSwitch.isLocationEnabledwithHigherAccuracy((value) => {
                    console.log('Values is:  ' + value);
                    if (!value) {
                        this.onEnableLocationPress()
                    }
                })
            ,
            () => { this.onEnableLocationPress() },
        );

        navigator.geolocation.getCurrentPosition(position => this.updateRegion(position),
            (error) => console.log(error.message),

        );
        // this.watchID = navigator.geolocation.watchPosition((position => this.updateRegion(position)
        // ), error => console.log(error),
        //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
    }

    fetchAddressFromLatLong = (lat, long) => {


        var pos = {
            lat: lat,
            lng: long
        };
        Geocoder.geocodePosition(pos).then(res => {
            this.setState({ address: res[0].formattedAddress })
        })
            .catch(error => alert(error));
    }

    onEnableLocationPress() {
        LocationSwitch.enableLocationService(1000, true,
            null, null);
    }
    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    markersRender = () => {
        const { markers } = this.state

        markers.map(marker => (
            <MarkerAnimated
                ref={'marker'}
                draggable
                title={markers.title}
                coordinate={marker.coordinates}
                //   onDragEnd={(e) => this.setState({ region: e.nativeEvent.coordinate, latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude })}
                image={require('./../assets/car.png')}
            />
        ));
    }

    calloutRender = () => {

        return (
            <Callout style={{
                flex: 1, flexDirection: "row"
            }}>
                <View style={{ flex: 1, alignItems: 'center', margin: 5 }}>
                    <TextInput style={{
                        backgroundColor: '#ffffff',
                        width: '90%',
                        paddingLeft: 10,
                        height: 40,
                        color: 'black',
                        borderRadius: 30
                    }}
                        placeholder={"Pickup Point"}
                    />
                    <TextInput style={{
                        backgroundColor: '#ffffff',
                        width: '90%',
                        paddingLeft: 10,
                        marginTop: 10,
                        height: 40,
                        color: 'black',
                        borderRadius: 30
                    }}
                        placeholder={"DropOff Point"}
                    />
                </View>
            </Callout>
        );
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    ref={"map"}
                    style={styles.container}
                    showsUserLocation
                    showsMyLocationButton
                    region={this.getMapRegion()}
                    onRegionChangeComplete={region => this.setState({ region, latitude: region.latitude, longitude: region.longitude })}
                >

                    <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
                    {this.markersRender()}
                </MapView>
                <View style={styles.buttonContainer}>
                    <Text>Latitude:   {this.state.latitude} </Text>
                    <Text>Longitude:  {this.state.longitude} </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => this.animate()}
                            style={[styles.bubble, styles.button]}
                        >
                            <Text>Animate</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.fetchAddressFromLatLong(this.state.latitude, this.state.longitude)}
                            style={[styles.bubble, styles.button]}
                        >
                            <Text>Address</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                {
                    this.calloutRender()
                }
            </View>
        );
    }
}




const styles = StyleSheet.create({
    container: {
        height: '80%',
        width: '100%',
    },
    bubble: {
        flex: 1,
        backgroundColor: '#ff00ff',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    latlng: {
        width: 200,
        alignItems: 'stretch',
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        alignItems: 'center',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
});
export default GooglemapIntegration;
