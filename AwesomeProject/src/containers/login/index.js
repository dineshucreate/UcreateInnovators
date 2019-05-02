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
	AsyncStorage,
	Button
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
									<TouchableOpacity
										style={{ marginTop: 10, backgroundColor: 'red' }}
										onPress={this.termsAndConditions}
									>
										<Text style={{ color: 'white' }}>Terms&Conditions</Text>
									</TouchableOpacity>

									{/* <Text style={[ styles.countText ]}>
										{this.state.email !== '' ? this.state.email : null}
									</Text> */}
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
