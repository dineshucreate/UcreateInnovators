import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Text, 
    View,
    Image,
    ScrollView, 
    TextInput, 
    TouchableOpacity, 
    ActivityIndicator } from 'react-native';
import styles from './style';
import { loginRequest } from './actions';
import CustomButton from '../../Components/CustomButton';
import config from '../../Config/config';

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

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.loginData && nextProps.loginData.status === 200) {
            nextProps.navigation.navigate('home', 
            { user: prevState.username, pwd: prevState.password, loginData: nextProps.loginData });
         }

        if (nextProps.someValue !== prevState.someValue) {
            return { someState: nextProps.someValue }; 
        }
        return null;
     }

    constructor() {
        super();
        this.state = {
            username: config.username,
            password: config.password,
            loader: false,
        };
    }

    render() {
        const { loginRequestt, loginData } = this.props;
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
                { this.props.loader &&
                <ActivityIndicator size="large" color="#0000ff" animating="true" />}
                <CustomButton 
                    myText='Log In' 
                    myCustomClick={() => {
                        loginRequestt(username, password);
                    }}
                />
            </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    loginData: state.login.accessDataInIndex,
    loader: state.login.loading,
    errFromServer: state.login.errorFromServer,
});

const mapDispatchToProps = (dispatch) => ({
     loginRequestt: (username, password) => 
     dispatch(loginRequest(username, password))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Login);
