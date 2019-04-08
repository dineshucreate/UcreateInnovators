import React, { Component } from 'react'
import { TextInput,
    Image,
    Button,
    StyleSheet,
     View } from 'react-native'

export default class Login extends Component {
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
              <TextInput style = {styles.input}
              placeholder = "Email"
              underlineColorAndroid = "transparent"
              />
              <TextInput style = {styles.password_input}
              placeholder = "Password"
              underlineColorAndroid = "transparent"
              />
        
              <Button style={styles.button}
              title="Login"
              onPress= {this._onPress}
              />
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
      padding:15,
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
    marginTop:10,
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
    alignSelf:'center',
    marginBottom:10,
    height: 50
  }
  });
