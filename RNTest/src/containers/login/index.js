import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
export default class Login extends Component {
  sumOfNumber = (a, b) => {
    return a + b
  }
  render() {
    return (
      <View>
        <View>
          <Text>1234</Text>
        </View>
        <View>
          <Text>123</Text>
        </View>
        <View>
          <Text>123</Text>
        </View>
        <View>
          <Text>123</Text>
        </View>
        <TouchableOpacity>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
