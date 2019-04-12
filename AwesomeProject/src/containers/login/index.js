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
	Dimensions
} from 'react-native';
import styles from './style';
import { emptyRegex, emailReg, passwordReg } from '../../utilities/regex.js';
import { LoginErrors } from '../../utilities/errorStrings';

const height = Dimensions.get('window').height;

export default class login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			email: '',
			emailValid: true,
			password: '',
			passwordValid: true
		};
		let obj = { person: { name: 'Alex', address: 'CA', dog: { name: 'Bravo', breed: 'german sheffered' } } };
		const city = {
			name: 'cityName',
			state: 'CA'
		};
	}

	login = () => {
		console.log(this.state.email);
		if (emailReg.test(String(this.state.email).toLowerCase()) == true) {

		} else {
			console.log('its correct');
		}
	};

	static navigationOptions = {
		title: 'Login'
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<StatusBar barStyle="light-content" />
				<KeyboardAvoidingView behavior="padding" style={styles.container}>
					<TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
						<ScrollView>
							<View style={[ styles.container, { height: height, marginTop: 100 } ]}>
								<View style={styles.logoContainer}>
									<Image source={require('../../assets/0.gif')} style={styles.logo} />
								</View>
								<View style={styles.infoContainer}>
									<TextInput
										style={[ styles.input, !this.state.emailValid ? styles.inputError : null ]}
										onChangeText={(email) => this.setState({ email })}
										placeholder="Enter username/email"
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
									<Text style={[ styles.countText ]}>
										{this.state.count !== 0 ? this.state.count : null}
									</Text>
									<Text style={[ styles.countText ]}>
										{this.state.name !== '' ? this.state.name : null}
									</Text>
								</View>
							</View>
						</ScrollView>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</SafeAreaView>
		);
	}
}
