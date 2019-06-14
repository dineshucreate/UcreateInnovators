import React, { Component } from "react";
import { View, Text } from "react-native";
export default class Landing extends Component {
    componentDidMount() {
        var x = 0;
        alert(x)
        Promise promise = new Promise((resolve, reject)=> {
            resolve('123')
        })
        promise.then((a)=> {
            alert(a)
        }).catch((b)=> {
            alert(b)
        })
    }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>123</Text>
      </View>
    );
  }
}
