import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import { loginRequest } from './actions';
import CustomButton from '../../Components/CustomButton';

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
        const { navigation, loginRequestt, loginData } = this.props;
        const { username, password } = this.state;
        console.log(`Get the data :  ${JSON.stringify(loginData)}`);
        
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
                <CustomButton 
                    myText='Log In'
                    myCustomClick={() => {
                        loginRequestt(username, password, navigation);
                        //navigation.navigate('home', { user: username, pwd: password });
                    }}
                />
            </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    loginData: state.login.simi,
});
const mapDispatchToProps = (dispatch) => ({
     loginRequestt: (username, password, navigation) => 
     dispatch(loginRequest(username, password, navigation))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Login);

