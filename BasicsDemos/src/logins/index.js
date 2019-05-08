import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { incementClicked, decrementClicked } from "./actions";
class Login extends Component {
  constructor() {
    super();
  }

  moveToHome = () => {
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={this.props.increment}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <Text style={{ paddingTop: 100, textAlign: "center" }}>
          {this.props.counter}
        </Text>
        <TouchableOpacity style={{paddingTop:100}} onPress={this.moveToHome}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStatesToProps = state => {
  const { counter } = state.login;
  return { counter };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => incementClicked(dispatch),
    decrement: () => decrementClicked(dispatch)
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(Login);
