import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
// https://github.com/react-native-community/react-native-maps
import { Marker } from "react-native-maps";
import Geocoder from "react-native-geocoding";
Geocoder.init("AIzaSyDbzh7bmVc7G6ATygzBPjrnXzF1LwdNsR8"); 
export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }

  onRegionChangeComplete(region) {
    Geocoder.from(region.latitude, region.longitude)
      .then(json => {
        console.log(JSON.stringify(json));
        var addressComponent = json.results[0].address_components[0];
        // console.log(JSON.stringify(addressComponent));
      })
      .catch(error => console.warn(error));
    this.setState({ region });
    this.props.navigation.navigate('Places')
  }

  render() {
    return (
      // <MapView
      //   style={{flex: 1}}
      //   region={{
      //     latitude: 30.7333,
      //     longitude: 76.7794,
      //     latitudeDelta: 0.0922,
      //     longitudeDelta: 0.0421
      //   }}
      //   showsUserLocation={true}
      // />
      <MapView
        style={{ flex: 1 }}
        region={this.state.region}
        onRegionChange={region => this.onRegionChangeComplete(region)}
        onRegionChangeComplete={region => this.onRegionChangeComplete(region)}
      >
        {/* <Marker
      coordinate={{latitude:this.state.region[0].latitude,longitude:this.state.region[0].longitude}}
      title={this.state.region[0].title}
      description={this.state.region[0].desc}
    /> */}
        {/* {this.state.region.map((value)=> {
<Marker
      coordinate={{latitude:value.latitude,longitude:value.longitude}}
      title={value.title}
      description={value.desc}
    />
})} */}
        <Marker
          coordinate={{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude
          }}
          image={require("../../assets/images/markerIcon.png")}
        />
      </MapView>
    );
  }
}
