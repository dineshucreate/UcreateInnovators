import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ActivityIndicator, Button, Alert, ImageBackground, Image, ScrollView, TextInput, InputAccessoryView, TouchableHighlight, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import styles from './style';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: 'simerjeet-ucreate',
            password: 'Ucreate@123',
        }
    }
    static navigationOptions = {
        drawerLabel: 'Login',
        drawerIcon: ({ tintColor }) => (
          <Image 
            source = {{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };

    static navigationOptions = {
        title: 'LOGIN',
    };
    
    render() {
        const { navigation } = this.props;
        const { username,password } = this.state;
        return (
              <ScrollView contentContainerStyle={styles.contentContainer}>
               <TouchableOpacity onPress = {() => this.props.navigation.toggleDrawer()}>
                    <View>
                        <Image style = {styles.profileImage}
                             source = {{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                        />
                    </View>
                </TouchableOpacity>
                <View style={styles.container}>
                <Text style={styles.welcome}>LOGIN SCREEN</Text>
                <Text style={styles.heading}>Login</Text>
                <TextInput style = {styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText = {(text) => this.setState({username:text})}
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
                    navigation.navigate('Home',{user :username,pwd :password})
                }} 
                />
            </View>
            </ScrollView>
        );
    }
}
export default Login;