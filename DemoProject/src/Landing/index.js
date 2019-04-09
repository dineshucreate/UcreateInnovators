import React, { Component } from 'react';
import {Image} from 'react-native';

export default class Landing extends Component {
    render() {
        let picture = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
      return (
        //For returning Image
          <Image source = {picture} style = {{width: "100%", height: "100%"}}/>

        //For returning view
        // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        //   <Text>Hello, world!</Text>
        // </View>
      );
    }
  }


