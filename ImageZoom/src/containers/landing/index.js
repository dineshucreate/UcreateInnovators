import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
const images = [
  {
    url: "",
    props: {
      source: require("../../assets/images/File.jpg")
    }
  }
];
export default class Landing extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ImageViewer style={{width:'100%',resizeMode:'contain'}} imageUrls={images} />
      </View>
    );
  }
}
