import React, { Component } from "react";
import {loginAPI} from './actions'
import styles from './styles'
import {connect} from 'react-redux'
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";

class Login extends Component {

    loginClicked = () => {
        this.props.loginUser()
    }

shouldComponentUpdate () {
  console.log(this.props)
}

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.styleTextInput} placeholder="Email" />
        <TextInput style={styles.styleTextInput} placeholder="Password" />
        <TouchableOpacity onPress={this.loginClicked} style={styles.styleTouchableOpacity}>
          <Text style={styles.styleTouchableOpacityText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStatesToProps = (state) => {
    return {
        state : state.loginReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: () => dispatch(loginAPI())
    }
} 

export default connect(mapStatesToProps, mapDispatchToProps) (Login)