import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import {
	Image,
	View,
	SafeAreaView,
	Text,
	TextInput,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	StatusBar,
	Keyboard,
	TouchableOpacity,
	ScrollView,
	Dimensions,
	AsyncStorage,
	Button,
	Alert
} from 'react-native';
import styles from './style';
import { emptyRegex, emailReg, passwordReg } from '../../utilities/regex.js';
import { LoginErrors } from '../../utilities/errorStrings';
import User from '../../models/user';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import Loader from '../../loader/loader';
import { loginRequest } from './actions';
import Modal from 'react-native-modal';
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

// import CustomDialogue from '../../loader/CustomDialogue';

const height = Dimensions.get('window').height;

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			email: 'y@y.co',
			emailValid: true,
			password: 'Ios@1234',
			passwordValid: true,
			user: { email: '', password: '' },
			url: '',
			loading: false,
			showModal: false,
			isModalVisible: false
		};
		// this.getUserData();
	}

	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	};

	// Push Notifications Methods
	// ******************************************************
	componentDidMount() {
		SplashScreen.hide();
		this.checkPermission();
		this.createNotificationListeners();
		console.log('My name is Gurpreet');
	}

	componentWillUnmount() {
		this.notificationListener();
		this.notificationOpenedListener();
	}

	//Push Notification:

	// 3
	async getToken() {
		let fcmToken = await AsyncStorage.getItem('fcmToken');
		// this.setState({ username: fcmToken });
		if (!fcmToken) {
			fcmToken = await firebase.messaging().getToken();
			//this.setState({ username: fcmToken });
			if (fcmToken) {
				// user has a device token
				console.log('Device Tokem = ', fcmToken);
				await AsyncStorage.setItem('fcmToken', fcmToken);
			}
		}
	}

	async checkPermission() {
		const enabled = await firebase.messaging().hasPermission();
		if (enabled) {
			this.getToken();
		} else {
			this.requestPermission();
		}
	}

	2;
	async requestPermission() {
		try {
			await firebase.messaging().requestPermission();
			// User has authorised
			this.getToken();
		} catch (error) {
			// User has rejected permissions
			console.log('permission rejected');
		}
	}

	async createNotificationListeners() {
		/*
        * Triggered when a particular notification has been received in foreground
        * */
		this.notificationListener = firebase.notifications().onNotification((notification) => {
			const { title, body } = notification;
			this.showAlert(title, body);
		});

		/*
        * If your app is in background, you can listen for when a notification is clicked 
        / tapped / opened as follows:
        * */
		this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
			const { title, body } = notificationOpen.notification;
			this.showAlert(title, body);
		});

		/*
        * If your app is closed, you can check if it was opened by
         a notification being clicked / tapped / opened as follows:
        * */
		const notificationOpen = await firebase.notifications().getInitialNotification();
		if (notificationOpen) {
			const { title, body } = notificationOpen.notification;
			this.showAlert(title, body);
		}
		/*
        * Triggered for data only payload in foreground
        * */
		this.messageListener = firebase.messaging().onMessage((message) => {
			//process data message
			console.log(JSON.stringify(message));
		});
	}

	showAlert(title, body) {
		Alert.alert(title, body, [ { text: 'OK', onPress: () => console.log('OK Pressed') } ], { cancelable: false });
	}
	/*----------------------------------------------------------------------------------*/

	//******************************************************* */
	getUserData = async () => {
		const user = await AsyncStorage.getItem('user');
		if (user != null) {
			this.props.navigation.navigate('Home', { user: this.state.user });
		}
		console.log(user);
	};

	loginFacebook = () => {
		const { navigation } = this.props;
		LoginManager.logInWithReadPermissions([ 'public_profile', 'email' ]).then(
			(result) => {
				if (result.isCancelled) {
					Alert.alert('Login was cancelled');
				} else {
					AccessToken.getCurrentAccessToken().then(() => {
						const responseInfoCallback = (error, result2) => {
							if (error) {
								Alert.alert(`Error fetching data: ${error.toString()}`);
							} else {
								console.log(JSON.stringify(result2));
								Alert.alert('Welcome', result2.name);
								// navigation.navigate('fb', {
								// 	name: result2.name,
								// 	avatar: result2.picture.data.url
								// });
							}
						};
						const infoRequest = new GraphRequest(
							'/me?fields=name,email,picture.type(large)',
							null,
							responseInfoCallback
						);
						new GraphRequestManager().addRequest(infoRequest).start();
					});
				}
			},
			(error) => {
				Alert.alert(`Login failed with error: ${error}`);
			}
		);
	};

	validateForm = async (callback) => {
		let isDone = true;
		const loginDetails = this.state;
		mainValidations.forEach((input) => {
			input.validations.forEach((validation) => {
				if (!validation.regex.exec(loginDetails[input.propertyName].trim())) {
					if (isDone) {
						this.setState((preState) => ({
							...preState,
							validationErrors: {
								...preState.validationErrors,
								[input.errorPropertyName]: validation.errorMessage
							}
						}));
						alert(validation.errorMessage);
						isDone = false;
					}
				} else {
					this.setState((preState) => ({
						...preState,
						validationErrors: {
							...preState.validationErrors,
							[input.errorPropertyName]: ''
						}
					}));
				}
			});
		});
		await callback(isDone);
	};

	storeUser = async () => {
		await AsyncStorage.setItem('user', JSON.stringify(this.state.user));
	};

	termsAndConditions = () => {
		this.toggleModal();
	};

	login = () => {
		this.validateForm((isDone) => {
			if (isDone) {
				const { loginRequest, navigation } = this.props;
				const { email, password } = this.state;
				loginRequest(email, password, navigation);
			}
		});
	};

	imageTapped = () => {
		alert('Image Clicked!!!');
	};

	static navigationOptions = {
		title: 'Login',
		header: null
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<StatusBar barStyle="dark-content" />
				<KeyboardAvoidingView behavior="padding" style={styles.container}>
					<TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
						<ScrollView>
							<View style={[ styles.container, { height: height, marginTop: 100 } ]}>
								<View style={styles.logoContainer}>
									<TouchableOpacity onPress={this.imageTapped}>
										<Image source={require('../../assets/0.gif')} style={styles.logo} />
									</TouchableOpacity>
								</View>
								<View style={styles.infoContainer}>
									<TextInput
										style={[ styles.input, !this.state.emailValid ? styles.inputError : null ]}
										// onChangeText={(email) => this.setState({ token })}
										value={this.state.email}
										placeholder="Enter an email"
										placeholderTextColor="rgba(255, 255, 255, 0.8)"
										keyboardType="email-address"
										returnKeyType="next"
										autoCorrect={false}
										clearButtonMode="while-editing"
										onSubmitEditing={() => this.refs.txtPassword}
									/>
									<TextInput
										style={styles.input}
										onChangeText={(password) => this.setState({ password })}
										value={this.state.password}
										maxLength={15}
										placeholder="password"
										placeholderTextColor="rgba(255, 255, 255, 0.8)"
										keyboardType="email-address"
										returnKeyType="go"
										secureTextEntry={true}
										clearButtonMode="while-editing"
										ref={'txtPassword'}
									/>
									<TouchableOpacity
										style={[ styles.buttonContainer, { backgroundColor: '#f7c744' } ]}
										onPress={this.login}
									>
										<Text style={[ styles.buttonText, { color: 'rgb(32, 53, 70)' } ]}>SIGN IN</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={[
											styles.buttonContainer,
											{ backgroundColor: '#3b5998', flexDirection: 'row' }
										]}
										onPress={this.loginFacebook}
									>
										<Image source={require('../../assets/facebook.png')} style={styles.fbLogo} />
										<Text style={[ styles.buttonText, { color: 'white' } ]}>
											Login with Facebook
										</Text>
									</TouchableOpacity>
									{this.props.loading && <Loader loading={this.props.loading} />}
									<Modal isVisible={this.state.isModalVisible}>
										<View style={styles.container}>
											<View style={{ flex: 1 }}>
												<Text>Hello!</Text>
												<Button title="Hide modal" onPress={this.toggleModal} />
											</View>
										</View>
									</Modal>
								</View>
							</View>
						</ScrollView>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</SafeAreaView>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.login.loading
	};
};
const mapDispatchToProps = (dispatch) => ({
	loginRequest: (email, password, navigation) => dispatch(loginRequest(email, password, navigation))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const mainValidations = [
	{
		validations: [
			{ regex: emptyRegex, errorMessage: LoginErrors.emailEmptyError },
			{ regex: emailReg, errorMessage: LoginErrors.inValidEmail }
		],
		propertyName: 'email',
		errorPropertyName: 'emailError'
	},
	{
		validations: [
			{ regex: emptyRegex, errorMessage: LoginErrors.passwordEmptyError },
			{ regex: passwordReg, errorMessage: LoginErrors.passwordLengthError }
		],
		propertyName: 'password',
		errorPropertyName: 'passwordError'
	}
];
