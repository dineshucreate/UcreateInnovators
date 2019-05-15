import React, { Component } from 'react'
import axios from 'axios';
import { StackActions, NavigationActions } from 'react-navigation';
import {
  TextInput,
  Image,
  Button,
  Alert,
  Text,
  StyleSheet,
  View,
  AsyncStorage
} from 'react-native'

export default class Login extends Component {

  static navigationOptions = {
    title: 'Login',
    tabBarIcon: ({ tintColor }) => (
      <Image style={styles.icon}
      source={require('../../../assets/ic_live.png')}/>
    )
  };

  constructor(props) {
    super(props)
    this.state = {
      TextInputValueHolder: '',
      textValue: 'Forgot password?',
      email: 'try27@gmail.com',
      password: 'Android@123'
    }
  }


  loginApi = () => {

    try {
      console.log(this.state.email);
      console.log(this.state.password);
      let data = JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      });

      axios.post('https://footballalbum-prod-api.imfootball.me/userapi/api/Auth/Login', data, {
        headers: {
          'Content-Type': 'application/json',
          'ZUMO-API-VERSION': '2.0.0',
          'Ocp-Apim-Subscription-Key': '6c192d2e80bb49a8b90f6d684cf18b9b',

        }
      }).then(res => {
        const response = res.data;
        if (res.status == 200) {
          userId = res.data.user.userGuid
          this.saveUserId();
          this.navigateToOther();
        }
      })
    } catch (err) {
      console.log("error===============================D", err);
    }

  }

  saveUserId = async () => {
    try {
      console.log("+++++++++ userID ", userId);
      await AsyncStorage.setItem('userId', userId);
    } catch (error) {
      console.log("Errer  ", error)

    }
  }

  GetValueFunction = () => {
    const { TextInputValueHolder } = this.state;
    Alert.alert(TextInputValueHolder)
  }

  navigateToOther() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'MyFlatList', params: { name: 'Ruchi' } })
      ]
    });

    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerBox}>
          <Image style={styles.stretch}
            source={require('../../../assets/icon.png')}
            resizeMode="contain"
          />
          <TextInput style={styles.input}
            placeholder="Email"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          // onChangeText={TextInputValueHolder => this.setState({ TextInputValueHolder })}
          />
          <TextInput style={styles.password_input}
            placeholder="Password"
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />

          <Text>{this.state.textValue}</Text>

          <Button style={styles.button}
            title="Login"
            onPress={this.loginApi}
          // {() => this.setState({ textValue: 'Done' })}
          // {this.GetValueFunction}
          // {this._onPress}
          >
          </Button>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

    justifyContent: 'center',
    backgroundColor: 'green'
  },
  centerBox: {
    justifyContent: 'center',
    margin: 20,
    padding: 15,
    borderRadius: 4,
    backgroundColor: 'orange'
  },
  input: {
    height: 40,
    borderRadius: 4,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  password_input: {
    marginTop: 10,
    marginBottom: 10,
    height: 40,
    borderRadius: 4,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  button: {
    marginTop: 10,
    height: 40,
    borderRadius: 5,
    borderColor: '#7a42f4',
    borderWidth: 1

  },
  stretch: {
    width: 50,
    alignSelf: 'center',
    marginBottom: 10,
    height: 50
  },
  icon: {
    width: 20,
    height: 20
  }
});

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  centerBox: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
    padding: 15,
    borderRadius: 4,
    backgroundColor: 'orange'
  },
  secondBox: {
    flex: 2,
    justifyContent: 'center',
    margin: 20,
    padding: 15,
    borderRadius: 4,
    backgroundColor: 'yellow'
  },
  input: {
    height: 40,
    borderRadius: 4,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red'
  }
});
