import React, { Component } from 'react';
import { Text, View, ImageBackground, TextInput, Image, TouchableOpacity } from 'react-native';
import { loginRequest } from './action'
import PropTypes from 'prop-types';
import styles from './style';
import Buttonlogin from '../../styling/button';
import Loader from '../loader/index';
import { connect } from 'react-redux';

import Modal from "react-native-modal";


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: 'y@y.co',
            password: 'Ios@1234',
            loading: false,
            erremail: '',
            errpassword: '',
            isModalVisible: false,
        }
    }

    toggleModal = () => {
        // this.props.navigation.navigate('modelExample')


        this.setState({ isModalVisible: !this.state.isModalVisible });
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
                        onClick={this.toggleModal}
                    />
                    <Text style={styles.TextShadowStyle}>CREATE AN ACCOUNT</Text>

                    {this.props.loading && (
                        <Loader
                            loading={this.props.loading} />
                    )}


                    <Modal isVisible={this.state.isModalVisible}>

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


                            <View style={styles.Alert_Main_View}>


                                <Text style={styles.Alert_Title}>Delete Account</Text>


                                <View style={{ width: '100%', height: 2, backgroundColor: '#000' }} />


                                <Text style={styles.Alert_Message}> Are You Sure Delete this Account. </Text>


                                <View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />


                                <View style={{ flexDirection: 'row', height: '30%' }}>

                                    <TouchableOpacity
                                        style={styles.buttonStyle}
                                        onPress={this.toggleModal}
                                        activeOpacity={0.7}
                                    >

                                        <Text style={styles.TextStyle}> OK </Text>

                                    </TouchableOpacity>

                                    <View style={{ width: 1, height: '100%', backgroundColor: '#000' }} />

                                    <TouchableOpacity
                                        style={styles.buttonStyle}
                                        onPress={this.toggleModal}
                                        activeOpacity={0.7}
                                    >

                                        <Text style={styles.TextStyle}> CANCEL </Text>

                                    </TouchableOpacity>

                                </View>

                            </View>

                        </View>

                    </Modal>


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