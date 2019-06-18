import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from '../../components/Header'
export default class Static extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }
  componentDidMount() {
    var x = "";
    if (x) {
    } else {
      console.log("empty string is false");
    }

    // comparing value
    var a = 0 == "0";

    //comparing type
    var b = 0 === "0";
    console.log(a);
    console.log(b);

    let y = 1;
    console.log(y);

    // Destruction object
    var dct = {
      m: 1,
      n: 2,
      o: 3
    };

    const { o } = dct;
    console.log(o);

    // Destruction array
    var arr = [1, 2, 3, 4, 5];
    var [r, t] = arr;
    console.log(r);
    console.log(t);

    // String interpolation
    var name = "Arvinder"
    console.log(`Hi My name is ${name}`);

    this.defaultValue(2)

    this.callbackFunction((a)=> {
        alert(a)
    })
  }

  // Function default 
  defaultValue = (a, b=2) => {
      console.log(a*b)
  }

  // Rest paramaters


  callbackFunction = (callback) => {
      callback('1234')
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
          <Text>Go back</Text>
        </TouchableOpacity>
        <Header text='123'></Header>
        <Text>{this.state.counter}</Text>
      </View>
    );
  }
}
