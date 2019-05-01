import React, { Component } from "react";
import styles from "./styles";
import {emailTextChanged, passwordTextChanged, loginClicked} from './actions'
import {connect} from 'react-redux'
import {
  AsyncStorage,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  Button,
  ImageBackground,
  TouchableOpacity,
  Dimensions
} from "react-native";
import {
  backgroundImage,
  fbIcon,
  logoWhite,
  backButton
} from "../../assets/images/images";
import { TextInput, ScrollView } from "react-native-gesture-handler";
import {
  emptyRegex,
  nameReg,
  emailReg,
  passwordReg,
  phoneReg
} from "../../utilities/regex/Regex";
import { LoginErrors } from "../../utilities/errorstrings";
import { underDevelopmentAlert } from "../../utilities/commonfunctions";
import {
  NavigationActions,
  StackActions,
  createDrawerNavigator
} from "react-navigation";
import { consumePostAPI } from "../../utilities/serverrequest";
import { saveToAsyncStorage } from "../../utilities/asyncstorage";
import HeaderButton from "../../components/headerbutton";
import User from "../../utilities/models/user";
import FriendList from "../../containers/friendlist";
import Home from "../../containers/home";
import Axios from "axios";
class Authenticate extends Component {
  constructor(props) {
    super(props);
  }
  loginClicked() {
    this.validateForm(isDone => {
      if (isDone) {
        this.props.loading = true;
        let user = new User(null);
        user.loginUser(
          this.state.email,
          this.state.password,
          response => {
            this.setState({ loading: false });
            saveToAsyncStorage(response, user => {
              const resetAction = StackActions.reset({
                index: 0,
                key: null,
                actions: [
                  NavigationActions.navigate({ routeName: "RootDrawerStack" })
                ]
              });
              this.props.navigation.dispatch(resetAction);
              // this.props.navigation.navigate("FriendList", {
              //   response: response
              // });
            });
          },
          error => {
            this.setState({ loading: false });
            alert(error.response.data.message);
          }
        );
      }
    });
  }

  validateForm = async callback => {
    let isDone = true;
    const loginDetails = this.state;
    mainValidations.forEach(input => {
      input.validations.forEach(validation => {
        if (!validation.regex.exec(loginDetails[input.propertyName].trim())) {
          if (isDone) {
            this.setState(preState => ({
              ...preState,
              validationErrors: {
                ...preState.validationErrors,
                [input.errorPropertyName]: validation.errorMessage
              }
            }));
            alert(validation.errorMessage);
            isDone = false;
          }
        } else {
          this.setState(preState => ({
            ...preState,
            validationErrors: {
              ...preState.validationErrors,
              [input.errorPropertyName]: ""
            }
          }));
        }
      });
    });
    await callback(isDone);
  };

  goBack() {
    this.props.navigation.pop();
  }

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundIimage}>
        <HeaderButton
          onPress={() => this.goBack()}
          style={styles.headerButton}
        />
        <ScrollView contentContainerStyle={styles.scrlVw}>
          <View style={styles.view}>
            <Image source={logoWhite} style={styles.image} />
            <TouchableOpacity
              style={styles.fbButton}
              onPress={() => underDevelopmentAlert()}
            >
              <Image source={fbIcon} style={styles.fbIcon} />
              <Text style={styles.fbText}>LOGIN WITH FACEBOOK</Text>
            </TouchableOpacity>
            <View style={styles.innerView}>
              <TextInput
                onChangeText={text => {
                  this.props.emailTextChangedLocal(text)
                }}
                autoCapitalize="none"
                placeholder="email address"
                placeholderStyle={styles.styleTextInputPlaceHolder}
                style={styles.styleTextInput}
              />
              <View style={styles.innerView1} />
              <TextInput
                onChangeText={text => {
                  this.props.passwordTextChangedLocal(text)
                }}
                secureTextEntry={true}
                style={styles.styleTextInput}
                placeholder="password"
              />
              <View style={styles.innerView1} />
              <TouchableOpacity>
                <Text
                  style={styles.btnForgot}
                  onPress={() => underDevelopmentAlert()}
                >
                  Forgot your password?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.styleLogin}
                onPress={() => this.props.loginClickedLocal(this.props.email, this.props.password)}
              >
                <Text style={styles.btnLogin}>LOG IN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.styleCreate}
                onPress={() => underDevelopmentAlert()}
              >
                <Text style={styles.btnCreate}>CREATE AN ACCOUNT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        {this.props.loading ? (
          <View style={styles.styleActivityIndicatorView}>
            <ActivityIndicator
              size="large"
              style={styles.styleActivityIndicator}
            />
          </View>
        ) : null}
      </ImageBackground>
    );
  }
}

const mainValidations = [
  {
    validations: [
      { regex: emptyRegex, errorMessage: LoginErrors.emailEmptyError },
      { regex: emailReg, errorMessage: LoginErrors.inValidEmail }
    ],
    propertyName: "email",
    errorPropertyName: "emailError"
  },
  {
    validations: [
      { regex: emptyRegex, errorMessage: LoginErrors.passwordEmptyError },
      { regex: passwordReg, errorMessage: LoginErrors.passwordLengthError }
    ],
    propertyName: "password",
    errorPropertyName: "passwordError"
  }
];

const mapStateToProps = state => {
  return {
    email: state.login.email,
    password: state.login.password,
    loading:state.login.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    emailTextChangedLocal: (email) => dispatch(emailTextChanged(email)),
    passwordTextChangedLocal: (password) => dispatch(passwordTextChanged(password)),
    loginClickedLocal : (email, password) => dispatch(loginClicked(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (Authenticate)
