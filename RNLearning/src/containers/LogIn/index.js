import React, { Component } from 'react';
import { Text, View, Animated, Easing, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import { Colors } from '../../utilities/Colors';
import LoadingView from '../../utilities/loaderView';
import styles from './style.js';
import VectorIcon from '../../utilities/vectorIcons';
import { loginRequest } from './actions';
import { withInternetConnection } from '../../utilities/internetcheck';


const erremail = 'Email is required.';
const errpassword = 'Password is required.';
const DeviceHeight = Dimensions.get('window').height;
const image = require('../../assets/logolarge.png');


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false,
            erremail: '',
            errpassword: ''
        };
        this.animationlogo = new Animated.Value(0);
        this.imageHeight = new Animated.Value(0);
        this.animationreviewtext = new Animated.Value(0.3);
        this.showHideLoader = this.showHideLoader.bind(this);
        this.screenChange();
    }

    componentDidUpdate() {
        if (this.state.loading === true) {
            this.showHideLoader(true);
        } else if (this.refs.loader !== undefined) {
            this.showHideLoader(false);  
        }
    }

    onSignInPress = () => {
        const { loginRequestP, navigation } = this.props;
        const { username, password, } = this.state;
        withInternetConnection((arg) => {
            console.log(arg);
            this.showHideLoader(true);
            loginRequestP(arg.username, arg.password, arg.navigation);
        })({ username, password, navigation });
    }

    screenChangeLogic() {
        const { loginData } = this.props;
        if (loginData) {
            this.props.navigation.navigate('drawer', { animation: null, duration: 0 });
        } else {
            this.sequenceAnimations();
        }
    }

    screenChange = () => {
        setTimeout(() => {
            this.screenChangeLogic();
        }, 0);
    }

    showHideLoader = (isShow) => {
        if (isShow === true) {
            this.refs.loader.showModalView();
        } else {
            this.refs.loader.hideModalView();
        }
    }
    sequenceAnimations = () => {
        Animated.sequence([

            Animated.timing(this.animationlogo,
                {
                    toValue: 1,
                    duration: 1000,
                    delay: 1000,
                    easing: Easing.ease
                }),
            Animated.timing(this.animationlogo,
                {
                    toValue: 1,
                    easing: Easing.bounce
                })

        ]).start();
    }

    validate() {
        if (this.state.username.length === 0) {
            this.setState({ erremail });
            return false;
        }
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.username) === false) {
            this.setState({ erremail: 'Email is not correct' });
            return false;
        }
        if (this.state.password.length === 0) {
            this.setState({ erremail: '', errpassword });
            return false;
        }
        if (this.state.password.length > 30) {
            this.setState({ erremail: '', 
            errpassword: 'Password must be of maximum 30 characters' });
            return false;
        }

        this.setState({ erremail: '', errpassword: '' });
        return true;
    }

    renderLoadingView() {
        return (
            <LoadingView ref={'loader'} message='Logging In...' parentList={this} />
        );
    }

    render() {
        const increaseSize = this.animationlogo.interpolate(
            {
                inputRange: [0, 0.5, 1],
                outputRange: [120, 150, 180]
            }
        );
        const opacitytext = this.animationlogo.interpolate(
            {
                inputRange: [0, 0.5, 1],
                outputRange: [35, 15, 0]
            }
        );
        const marginbottom = this.animationlogo.interpolate(
            {
                inputRange: [0, 0.5, 1],
                outputRange: [-DeviceHeight - 300, 100, 0]
            }
        );
        const bgColor = this.animationlogo.interpolate(
            {
                inputRange: [0, 1],
                outputRange: ['white', Colors.baseColor]
            }
        );

        const { username, password } = this.state;

        this.state.loading = this.props.loading;


        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: bgColor }}>

                <Animated.View style={[styles.viewSplash, { backgroundColor: bgColor }]}>

                    <Animated.Image
                        style={[styles.logoimage, { width: increaseSize, height: increaseSize }]}
                        source={image}
                    />
                    <Animated.Text
                        style={[styles.reviewtooltext, { fontSize: opacitytext }]}
                    >Review Tool
                    </Animated.Text>
                </Animated.View>
                <Animated.View style={[styles.viewLogin, { marginBottom: marginbottom }]}>
                    <View
                        style={styles.viewIn}
                    >
                        <View>
                            <VectorIcon
                                style={{
                                    position: 'absolute',
                                    top: 35,
                                    left: 0,
                                }}
                                size={20}
                                groupName={'Entypo'}
                                name={'user'}
                                color={Colors.black}

                            />
                            <TextField
                                style={{ paddingLeft: 25 }}
                                label='Email Id'
                                value={username}
                                labelTextStyle={{ paddingLeft: 25 }}
                                returnKeyType='next'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                onChangeText={(text) => this.setState({ username: text })}
                                error={this.state.erremail}

                            />
                        </View>
                        <View>
                            <VectorIcon
                                style={{
                                    position: 'absolute',
                                    top: 35,
                                    left: 0,
                                }}
                                size={20}
                                groupName={'MaterialCommunityIcons'}
                                name={'textbox-password'}
                                color={Colors.black}
                            />
                            <TextField
                                label='Password'
                                secureTextEntry
                                value={password}
                                style={{ paddingLeft: 25 }}
                                labelTextStyle={{ paddingLeft: 25 }}
                                onChangeText={(text) => this.setState({ password: text })}
                                characterRestriction={30}
                                error={this.state.errpassword}
                            />
                        </View>
                        <TouchableOpacity 
                            onPress={this.onSignInPress} 
                            style={styles.viewLoginButton}
                        >
                            <View style={styles.viewLoginButtonWrapper}>
                                <Text
                                    color={Colors.colorFFFFFF}
                                    buttonStyle={{ backgroundColor: Colors.baseColor }}
                                >LOGIN
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
                {

                    this.renderLoadingView()
                }
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => ({
        loading: state.login.loading,
        loginData: state.login.loginData,
    });
const mapDispatchToProps = (dispatch) => ({
    loginRequestP: (email, password, navigator) => 
    dispatch(loginRequest(email, password, navigator))

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

