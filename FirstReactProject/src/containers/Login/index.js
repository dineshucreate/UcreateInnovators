import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import { loginSuccess } from './actions';

class Login extends Component {
  
    static navigationOptions = {
        drawerLabel: 'Login',
        drawerIcon: ({ tintColor }) => (
          <Image 
            source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
            style={[styles.icon, { tintColor }]}
          />
        ),
      };

    static navigationOptions = {
        title: 'LOGIN',
    };

    constructor() {
        super();
        this.state = {
            username: 'simerjeet-ucreate',
            password: 'Ucreate@123',
        };
    }
    
    render() {
        const { navigation } = this.props;
        const { username, password } = this.state;
        return (
              <ScrollView contentContainerStyle={styles.contentContainer}>
               <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                    <View>
                        <Image
                            style={styles.profileImage}
                            source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                        />
                    </View>
                </TouchableOpacity>
                <View style={styles.container}>
                <Text style={styles.welcome}>LOGIN SCREEN</Text>
                <Text style={styles.heading}>Login</Text>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ username: text })}
                />
                <Text style={styles.heading}>Password</Text>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ password: text })}
                />
                <Button
                    style={styles.buttonStyle}
                    title="Login"
                    onPress={() => {
                         navigation.navigate('home', { user: username, pwd: password });
                    }} 
                />
            </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = () => ({

});
const mapDispatchToProps = (dispatch) => ({
    loginStatusRequest: () => dispatch(loginSuccess())
});

export default connect(
    mapStateToProps,
     mapDispatchToProps)(Login);

