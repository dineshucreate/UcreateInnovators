import React, { Component } from 'react';
import { Text, View, ImageBackground, TextInput, Image } from 'react-native';
import { loginRequest } from './action'
import PropTypes from 'prop-types';
import styles from './style';
import Buttonlogin from '../../styling/button';
import Loader from '../loader/index';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: 'y@y.co',
            password: 'Ios@1234',
            loading: false,
            erremail: '',
            errpassword: ''
        }
    }

   
    onLoginPress = () => {

        const { loginRequest, navigation } = this.props;
        const { email, password, loading } = this.state
        loginRequest(email, password, navigation);
    }

    render() {
        const { navigate } = this.props.navigation;
        console.log('...Render.......  ' + this.props);

        return (

            <ImageBackground source={require('../../assets/global_bg.png')}
                style={styles.containerImage}>

                <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 250, height: 130, resizeMode: 'contain' }}
                        source={require('../../assets/ic_im_logo.png')} />

                    <View style={styles.welcome}>

                        <TextInput style={styles.input}
                            underlineColorAndroid="#06878A"
                            placeholder="Email"
                            placeholderTextColor="#06878A"
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                        />
                        <TextInput style={styles.input}
                            underlineColorAndroid="#06878A"
                            placeholder="Password"
                            placeholderTextColor="#06878A"
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                        />
                        <Text style={styles.titleText}>Forgot Password</Text>

                    </View>
                    <Buttonlogin title="Login"
                        onClick={this.onLoginPress}
                    />
                    <Text style={styles.TextShadowStyle}>CREATE AN ACCOUNT</Text>

                    {this.props.loading && (
                        <Loader
                            loading={this.props.loading} />
                    )}


                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.login.loading,
        loginData: state.login.loginData,
    };
};
const mapDispatchToProps = (dispatch) => ({
    loginRequest: (email, password, navigator) => dispatch(loginRequest(email, password, navigator))

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);