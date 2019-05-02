import React, { Component } from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import ObjImagePicker from "react-native-image-picker";
import ObjImageCropPicker from "react-native-image-crop-picker";
export default class ImagePicker extends Component {
  constructor() {
    super();
    this.state = {
      avatarSource: ""
    };
  }
  showImage = () => {
    ObjImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  };
  showImageFromCropPicker = () => {
    ObjImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  };

  render() {
    console.log(this.state.avatarSource.uri);
    return (
      <View style={{ flex: 1, padding: 50 }}>
        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.showImage}>
          <Text>Select Picture using normal picker</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.showImageFromCropPicker}>
          <Text>Select Picture using crop picker</Text>
        </TouchableOpacity>
        <Image
          style={{ width: 100, height: 100 }}
          source={this.state.avatarSource}
        />
      </View>
    );
  }
}

const options = {
  title: "Select Avatar",
  customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};
