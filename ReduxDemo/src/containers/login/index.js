import React, { Component } from "react";
import {
  loginAPI,
  onChangeEmailAction,
  onChangePasswordAction
} from "./actions";
import styles from "./styles";
import { connect } from "react-redux";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";

class Login extends Component {
  loginClicked = () => {
    if (this.props.email.length > 0) {
      if (this.props.password.length > 0) {
        this.props.loginUser(this.props.email, this.props.password);
      } else {
        alert('Please enter fields')
      }
    } else {
      alert('Please enter fields')
    }
  };

  textChangeEmail = text => {
    this.props.onEmailTextChange(text);
  };
  textChangePassword = text => {
    this.props.onPasswordTextChange(text);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this.textChangeEmail}
          style={styles.styleTextInput}
          placeholder="Email"
        />
        <TextInput
          onChangeText={this.textChangePassword}
          style={styles.styleTextInput}
          placeholder="Password"
        />
        <TouchableOpacity
          onPress={this.loginClicked}
          style={styles.styleTouchableOpacity}
        >
          <Text style={styles.styleTouchableOpacityText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStatesToProps = state => {
  console.log(JSON.stringify(state))
  return {
    data: state.loginReducer.data,
    email: state.loginReducer.email,
    password: state.loginReducer.password,
    success:state.loginReducer.success
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (email, password) => dispatch(loginAPI(email, password)),
    onEmailTextChange: text => dispatch(onChangeEmailAction(text)),
    onPasswordTextChange: text => dispatch(onChangePasswordAction(text))
  };
};

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(Login);
