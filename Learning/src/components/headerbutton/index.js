import React, { Component } from 'react'
import { TouchableOpacity } from "react-native";
import { backButton } from "../../assets/images/images";
export default class HeaderButton extends Component<props> {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          props.onPress();
        }}
      >
        <Image source={backButton} style={props.style} />
      </TouchableOpacity>
    );
  }
}
