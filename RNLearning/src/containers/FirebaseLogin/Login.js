import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import firebase from 'react-native-firebase';
import LoadingView from '../../utilities/loaderView';

export default class Login extends React.Component {

  state = { email: 'csegurpreet@gmail.com', password: '12345678', errorMessage: null }

  handleLogin = () => {
    const { email, password } = this.state;
    const { navigation } = this.props;
    this.refs.loader.showModalView();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => { 
          navigation.navigate('Main'); 
          this.refs.loader.hideModalView();
        })
      .catch(error => { 
          this.setState({ errorMessage: error.message });
          this.refs.loader.hideModalView();
      });
  }

  renderLoadingView() {
    return (
        <LoadingView ref={'loader'} message='Logging In...' parentList={this} />
    );
  }

  render() {
      const { errorMessage, email, password } = this.state;
      const { navigation } = this.props;
    return (
      <View style={styles.container}>
        {errorMessage &&
          <Text style={{ color: 'red' }}>
            {errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={text => this.setState({ email: text })}
          value={email}
          clearButtonMode='always'
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={text => this.setState({ password: text })}
          value={password}
          clearButtonMode='always'
        />
        <Button title="Login" onPress={this.handleLogin} />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => navigation.navigate('SignUp')}
        />
        {
            this.renderLoadingView()
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 20,
    margin: 8,
    padding: 8
  }
});
