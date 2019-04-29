import React, { Component } from 'react';
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
	AsyncStorage
} from 'react-native';
import styles from './style';
import { emptyRegex, emailReg, passwordReg } from '../../utilities/regex.js';
import { LoginErrors } from '../../utilities/errorStrings';
import User from '../../models/user';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import Loader from '../../loader/loader';
import { loginRequest } from './actions';

const height = Dimensions.get('window').height;

class login extends Component {
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
			loading: false
		};
		// this.getUserData();
	}

	componentDidMount() {
		SplashScreen.hide();
	}

	getUserData = async () => {
		const user = await AsyncStorage.getItem('user');
		if (user != null) {
			this.props.navigation.navigate('Home', { user: this.state.user });
		}
		console.log(user);
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

	login = () => {
		this.validateForm((isDone) => {
			if (isDone) {
				const { loginRequest } = this.props;
				const { email, password, loading } = this.state;
				loginRequest(email, password);
				// this.state.user.email = this.state.email;
				// let user = new User();
				// user.loginUserAPI(
				// 	this.state.email,
				// 	this.state.password,
				// 	(response) => {
				// 		console.log(response);
				// 		this.storeUser();
				// 		this.props.navigation.navigate('home', { user: this.state.user });
				// 	},
				// 	(error) => {
				// 		console.log(error);
				// 	}
				// );
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
										onChangeText={(email) => this.setState({ email })}
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
									<TouchableOpacity style={styles.buttonContainer} onPress={this.login}>
										<Text style={styles.buttonText}>SIGN IN</Text>
									</TouchableOpacity>
									{/* <Text style={[ styles.countText ]}>
										{this.state.email !== '' ? this.state.email : null}
									</Text> */}
									{this.props.loading && <Loader loading={this.props.loading} />}
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
	loginRequest: (email, password) => dispatch(loginRequest(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(login);

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
