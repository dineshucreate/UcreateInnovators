import { StyleSheet, View, ScrollView,Platform,NetInfo } from 'react-native';
import React from 'react';
import Authlogo from './logoComponent'
import AuthForm from './authForm'


class App extends React.Component {

  goNext = () => {
    this.props.navigation.navigate('dashboard')
  }
  isInternetConnected = async () => {
    return await NetInfo.fetch().then(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
        return state.isConnected;
    });

}

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Authlogo />
          <AuthForm 
          goNext={this.goNext}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d428a',
    padding: 50
  },

});

export default App;