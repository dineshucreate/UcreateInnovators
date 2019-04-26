import React, { Component } from 'react'
import {
  TextInput,
  Image,
  Button,
  Alert,
  Text,
  StyleSheet,
  View
} from 'react-native'

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      TextInputValueHolder: '',
      textValue: 'Forgot password?'
    }
  }

  GetValueFunction = () => {
    const { TextInputValueHolder } = this.state;
    Alert.alert(TextInputValueHolder)
  }

  _onPress = () => {
    const { navigate } = this.props.navigation;
    navigate('Home');
  };

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
            autoCapitalize="words"
            // onChangeText={TextInputValueHolder => this.setState({ TextInputValueHolder })}
          />
          <TextInput style={styles.password_input}
            placeholder="Password"
            underlineColorAndroid="transparent"
          />

          <Text>{this.state.textValue}</Text>

          <Button style={styles.button}
            title="Login"
            onPress={() => this.setState({ textValue: 'Done' })}
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
