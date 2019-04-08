import React, { Component } from 'react'
import { TouchableOpacity, Image } from "react-native";
import { backButton } from "../../assets/images/images";
export default class HeaderButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onPress();
        }}
      >
        <Image source={backButton} style={this.props.style} />
      </TouchableOpacity>
    );
  }
}
