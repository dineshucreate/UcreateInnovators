import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ActivityIndicator, Button, Alert, ImageBackground, Image, ScrollView, TextInput, InputAccessoryView, TouchableHighlight, TouchableOpacity } from 'react-native';
import styles from './style';

class Login extends Component {
    constructor(){
        super()
        this.state = {
          username: '',
          password: '',
          tempUserName: '',
        }
      }
      handlePress = (username) => {
        console.log(username);
        this.setState({tempUserName:username})
        //console.log(this.state.password);

     }
     
    render() {
        const inputAccessoryViewID = "uniqueID";
        const { navigation } = this.props;

        const { username,password,tempUserName } = this.state;
        return (
              <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.container}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{width: 250, height: 280, backgroundColor: 'powderblue'}} />
                <View style={{width: 250, height: 250, backgroundColor: 'skyblue'}} />
                </View>
                <Text style={styles.welcome}>{tempUserName}LOGIN SCREEN</Text>
                <Text style={styles.heading}>Login</Text>
                <TextInput style = {styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({username:text})}
                />
                <Text style = {styles.heading}>Password</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({password:text})}
                />
                <Button  style = {styles.buttonStyle}
                title="Login"
                onPress ={ () => {
                    this.handlePress(username)
                        //navigation.navigate('home',{user :username,pwd :password})
                    }} 
                />
            </View>
            </ScrollView>
        );
    }
}
export default Login;