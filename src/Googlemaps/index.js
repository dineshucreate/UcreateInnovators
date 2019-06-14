import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions, TextInput, TouchableOpacity, Platform, Alert, PermissionsAndroid } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Callout, Marker, AnimatedRegion, Polyline, MarkerAnimated } from 'react-native-maps';
import haversine from 'haversine';
import LocationSwitch from 'react-native-location-switch';
import Geocoder from 'react-native-geocoder';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

let { width, height } = Dimensions.get('window');
const API_KEY = 'AIzaSyDg9a0kfUxD6w9YVKnhMGkj8Bmt9GpJJUg';
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const HOME = {
    latitude: 30.6982816,
    longitude: 76.6907806,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
}
// markers: [
//     ...this.state.markers
//     , {
//         title: 'Marker1',
//         coordinates: {
//             latitude: 30.6982089,
//             longitude: 76.6907082
//         },
//     },
//     {
//         title: 'Marker 2',
//         coordinates: {
//             latitude: 30.68212089,
//             longitude: 76.7176607082
//         },
//     }]

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
            prevLatLng: {},
            address: '',
            markers: []
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
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        };

        if (Platform.OS === 'android') {
            if (this.refs.map) {
                this.refs.map.animateToRegion(HOME, 1000);
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
            longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        };
        try {
            if (Platform.OS === "android") {
                if (this.refs.map) {
                    this.refs.map.animateToRegion(newCoordinate, 1000);
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
                prevLatLng: newCoordinate,

            });
        } catch (error) {
            console.log(error);

        }

    }

    searchPlacesfromGoogle = () => {

        return (
            <GooglePlacesAutocomplete
                placeholder='Enter Location'
                minLength={2}
                autoFocus={false}
                listViewDisplayed='false'
                returnKeyType={'search'}
                fetchDetails={true}
                styles={{
                    textInputContainer: {
                        backgroundColor: 'rgba(0,0,0,0)',
                        width: '100%',
                        borderRadius: 30,
                        marginLeft: 10
                    },
                    textInput: {
                        height: 38,
                        color: '#5d5d5d',
                        fontSize: 16,
                    },
                    description: {
                        fontWeight: 'bold',
                    },
                    predefinedPlacesDescription: {
                        color: '#1faadb'
                    },
                    listView: {
                        backgroundColor: 'white',
                        padding: 5,
                    }
                }}

                onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                    console.log(details);
                    const coordinate = {
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng
                    }
                    this.setState({
                        latitude: coordinate.latitude,
                        longitude: coordinate.longitude,
                        markers: [
                            ...this.state.markers,
                            {
                                coordinate: coordinate,
                                title: details.formatted_address

                            }
                        ]
                    });
                }}
                currentLocation={true}
                currentLocationLabel="Current location"
                debounce={200}

                query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    key: API_KEY,
                    language: 'en', // language of the results
                    types: ['(cities)', 'geocode', 'locality'], // default: 'geocode',

                }}
                currentLocation={false}
            />
        );
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

        console.log(`lat: ${lat} long: ${long}`)
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

        console.log(`markers:   ${JSON.stringify(markers)}`);


        return markers.map(marker => (
            <MarkerAnimated
                ref={'marker'}
                draggable
                title={'Location'}
                description={marker.title}
                coordinate={marker.coordinate}
            //  onPress={() => this.fetchAddressFromLatLong(marker.coordinate.lat, marker.coordinate.lng)}
            //   onDragEnd={(e) => this.setState({ region: e.nativeEvent.coordinate, latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude })}

            />
        ));
    }

    calloutRender = () => {

        return (
            <Callout style={{
                flex: 1, flexDirection: "row"
            }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    {this.searchPlacesfromGoogle()}
                </View>
            </Callout>
        );
    }

    googleMapDirection = (origin, destination) => (
        <MapViewDirections
            origin={origin}
            destination={destination}

            apikey={API_KEY}
        />
    )
    onMapPress = (e) => {
        this.setState = ({
            markers: [
                ...this.state.markers,

            ]

        });
    }


render() {
    return (
        <View style={{ flex: 1 }}>
            <MapView
                provider={PROVIDER_GOOGLE}
                ref={"map"}
                style={styles.container}
                followsUserLocation
                showsMyLocationButton
                initialRegion={this.getMapRegion()}
                showsUserLocation
                region={this.getMapRegion()}
                onPress={this.onMapPress}
            >

                {this.googleMapDirection()}
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
                        <Text>HOME</Text>
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
        paddingTop: 150,
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
