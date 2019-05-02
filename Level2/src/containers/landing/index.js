import React, { Component } from "react";
import NavigationService from '../../utils/NavigationService'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
export default class Landing extends Component {
  navigateToScreen = index => {
    if (index == 0) {
      NavigationService.navigate("ImagePicker");
    }
  };

  constructor() {
    super();
    this.state = {
      arrFunctionalities: [
        { functionality: "Image Picker" },
        { functionality: "Date Picker" }
      ]
    };
  }
  render() {
    return (
      <View style={{ flex: 1, padding: 50 }}>
        <FlatList
          data={this.state.arrFunctionalities}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => this.navigateToScreen(index)}
              style={{ margin: 5 }}
            >
              <Text>{item.functionality}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
