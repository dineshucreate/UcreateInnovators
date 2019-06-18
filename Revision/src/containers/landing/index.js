import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as action from './actions'
import {connect} from 'react-redux'
import styles from './style'
class Landing extends Component {
  componentDidMount() {
    var x = 0;
    var promise = new Promise((resolve, reject) => {
      if (!true) {
        resolve("123");
      } else {
        reject("1232");
      }
    });
    promise
      .then(a => {
        console.log(a)
      })
      .catch(b => {
        console.log(b)
      }).finally(()=> {
        alert('Done')
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.counter}</Text>
        <TouchableOpacity onPress={()=> this.props.incrementClickedLocal()}><Text>Increment</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.decrementClickedLocal()}><Text>Decrement</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('static')}><Text>Navigate to next screen</Text></TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.landing.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementClickedLocal : () => dispatch(action.inrementClicked()),
    decrementClickedLocal : () => dispatch(action.decrementClicked())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Landing)