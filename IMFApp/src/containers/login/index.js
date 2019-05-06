import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, TouchableOpacity, Text, TextInput, View, ScrollView, ActivityIndicator, AsyncStorage } from 'react-native';
import styles from './style';
import BackButton from '../../component/backButton';
import BackgroundImage from '../../component/backgroundImage';
import { loginRequest } from './actions'
import {
    LoginManager, AccessToken, GraphRequest, GraphRequestManager
} from 'react-native-fbsdk';
class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'y@y.co',
            password: 'Ios@1234',
            TotalValue: '',
            loading: false
        }
    }
    backPress = () => {
        const { navigation } = this.props;
        navigation.pop();
    };
    LoginPress = () => {
        const { loginRequest, navigation } = this.props;
        const { email, password } = this.state
        loginRequest(email, password, navigation);
    };
    loginFacebookClicked = () => {
        const { navigation } = this.props;
        LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
            (result) => {
                if (result.isCancelled) {
                    Alert.alert('Login was cancelled');
                } else {
                    AccessToken.getCurrentAccessToken().then(
                        () => {
                            const responseInfoCallback = (error, result2) => {
                                if (error) {
                                    Alert.alert(`Error fetching data: ${error.toString()}`);
                                } else {
                                    console.log(JSON.stringify(result2));
                                    alert(result2.name)
                                    // navigation.navigate('fb', {
                                    //     name: result2.name,
                                    //     avatar: result2.picture.data.url
                                    // });
                                }
                            };
                            const infoRequest = new GraphRequest(
                                '/me?fields=name,email,picture.type(large)',
                                null,
                                responseInfoCallback
                            );
                            new GraphRequestManager().addRequest(infoRequest).start();
                        }
                    );
                }
            },
            (error) => {
                Alert.alert(`Login failed with error: ${error}`);
            }
        );
    }
    render() {
        return (
            <BackgroundImage>
                <BackButton name={'Back'} backPress={this.backPress} />
                <ScrollView contentContainerStyle={styles.backgroundView}>
                    <View style={styles.backgroundView}>
                        <Image style={styles.logoImage} source={require('../../assets/images/logoWhite.png')} />
                        <TouchableOpacity style={styles.facebookButton}
                            onPress={this.loginFacebookClicked}>
                            <Image style={styles.facebookIcon} source={require('../../assets/images/FbIcon.png')} />
                            <Text style={styles.facbookText}>LOG IN WITH FACEBOOK</Text>
                        </TouchableOpacity>
                        <View style={styles.loginView}>
                            <TextInput style={styles.textInput}
                                placeholder="email address"
                                onChangeText={(text) => this.setState({ email: text })} />
                            <View style={styles.lineView} />
                            <TextInput style={styles.textInput}
                                secureTextEntry={true}
                                placeholder="password"
                                onChangeText={(text) => this.setState({ password: text })} />
                            <View style={styles.lineView} />
                            <TouchableOpacity onPress={this._onPressButton}>
                                <Text style={styles.buttonForgotText}>Forgot your password</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.loginButton}
                            onPress={this.LoginPress}>
                            <Text style={styles.buttonLoginText}>LOG IN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._onPressButton}>
                            <Text style={styles.createAccountText}>CREATE AN ACCOUNT</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                {this.props.loading ?
                    <View style={{ width: '100%', height: '100%', position: 'absolute', justifyContent: 'center' }}>
                        <ActivityIndicator style={{ alignSelf: 'center' }} size='large' />
                    </View> : null
                }
            </BackgroundImage >
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

export default connect(mapStateToProps, mapDispatchToProps)(login);