import React, { Component } from "react";
import { View, Text } from "react-native";
import HigherOrderComponentObj from "../../HOC/higherordercomponent";
import CustomTextInput from '../../components/customtextinput'
const ObjCustomTextInput = HigherOrderComponentObj(CustomTextInput)
export default class Landing extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ObjCustomTextInput />
      </View>
    );
  }
}
