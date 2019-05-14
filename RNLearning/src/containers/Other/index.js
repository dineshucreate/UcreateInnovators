import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-navigation';
import styles from './style';

class Other extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            region: {
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            },
            markers: [
                {
                    latlng: { latitude: 19.0860, longitude: 72.9777 }, 
                    title: 'Hello',
                    description: 'Hi Hi hi hi'
                }
            ],
            x: { latitude: 19.0760, longitude: 72.8777 }
          };
    }

    
    async componentDidMount() {
        navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log(position);
            const region = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.09922,
                longitudeDelta: 0.90421,
            };
            this.setState({
                region,
            });
        },
        (error) => { 
            this.setState({ error: error.message });
                alert(error.message);
            },
        { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
        );
    }

    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.topBarContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.toggleDrawer()}
                    >
                        <Text style={styles.title}>Menu</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewIn}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        showsUserLocation
                        region={this.state.region}
                    >
                        {this.state.markers.map(marker => (
                            <Marker
                                coordinate={marker.latlng}
                                title={marker.title}
                                description={marker.description}
                            />
                        ))}
                        <Marker 
                            draggable
                            coordinate={this.state.x}
                            onDragEnd={(e) => { 
                                this.setState({ x: e.nativeEvent.coordinate });
                                alert(JSON.stringify(e.nativeEvent.coordinate));
                             }}
                        /> 
                       
                    </MapView>
                </View>
            </SafeAreaView >
        );
    }
}

export default Other;
