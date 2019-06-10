import React, { Component } from 'react';

import { StyleSheet, View, Text, Button, Platform } from 'react-native';
import Input from '../../utils/form/input'
import validationRule from '../login/ValidationRules'

class AuthForm extends Component {

    state = {
        type: 'Login',
        action: 'Login',
        actionMode: 'I want to Register',
        hasError: false,
        form: {
            email: {
                value: '',
                valid: false,
                type: 'textinput',
                rules: {
                    isRequired: true,
                    isEmail: true
                }
            },
            password: {
                value: '',
                valid: false,
                type: 'textinput',
                rules: {
                    isRequired: true,
                    minLength: 6
                }
            },
            confirmPassword: {
                value: '',
                valid: false,
                type: 'textinput',
                rules: {
                    confirmPass: 'password'
                }
            }

        }
    }
    updateInput = (name, value) => {
        this.setState({
            hasError: false
        })
        let formCopy = this.state.form;
        formCopy[name].value = value;

        let rules = formCopy[name].rules;
        let valid = validationRule(value, rules, formCopy);

        formCopy[name].valid = valid;
        this.setState({
            form: formCopy
        })

    }
    confirmPassword = () => (
        this.state.type != 'Login' ?
            <Input
                placeholder="Confirm your Password"
                placeholderTextColor="#cecece"
                type={this.state.form.confirmPassword.type}
                value={this.state.form.confirmPassword.value}
                onChangeText={value => this.updateInput("confirmPassword", value)}
                secureTextEntry

            />
            : null
    )
    formHasErrors = () => (
        this.state.hasError ?
            <View style={styles.errorContainer}>
                <Text style={styles.errorLabel}>Oops, check your info.</Text>
            </View>
            : null
    )

    submitUser = () => {
        let isFormValid = true;
        let formToSubmit = {}
        const formCopy = this.state.form;
        for (let key in formCopy) {
            if (this.state.type === 'Login') {
                //LOGIN
                if (key !== 'confirmPassword') {
                    isFormValid = isFormValid && formCopy[key].valid;
                    formToSubmit[key] = formCopy[key].value;
                }
            }
            else {
                //REGISTER
                isFormValid = isFormValid && formCopy[key].valid;
                formToSubmit[key] = formCopy[key].value;
            }
        }
        if (isFormValid) {
            if (this.state.type === 'Login') {
                console.log("If: " + formToSubmit);
            }
            else {
                console.log("else: " + formToSubmit);
            }
        }
        else {
            this.setState({
                hasError: true
            })
        }
    }

    changeFormType = () => {
        const type = this.state.type;
        this.setState({
            type: type === 'Login' ? 'Register' : 'Login',
            action: type === 'Login' ? 'Register' : 'Login',
            actionMode: type === 'Login' ? 'I want to  Login' : 'I want to  register',
        })
    }

    render() {
        return (
            <View>
                <Input
                    placeholder="Enter Email"
                    placeholderTextColor="#cecece"
                    keyboardType={"email-address"}
                    type={this.state.form.email.type}
                    value={this.state.form.email.value}
                    onChangeText={value => this.updateInput("email", value)}

                />

                <Input
                    placeholder="Enter your Password"
                    placeholderTextColor="#cecece"
                    type={this.state.form.password.type}
                    value={this.state.form.password.value}
                    onChangeText={value => this.updateInput("password", value)}
                    secureTextEntry

                />
                {this.confirmPassword()}
                {this.formHasErrors()}

                <View style={{ marginTop: 20 }}>

                    <View style={styles.button}>
                        <Button title={this.state.action}
                            onPress={this.submitUser} />
                    </View>

                    <View style={styles.button}>
                        <Button title={this.state.actionMode}
                            onPress={this.changeFormType} />
                    </View>
                    <View style={styles.button}>
                        <Button title="I'll do it later"
                            onPress={() => this.props.goNext()} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    errorContainer: {
        padding: 10,
        backgroundColor: '#f44336',
        marginBottom: 10,
        marginTop: 30
    },
    errorLabel: {
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#fff',

    },
    button: {
        ...Platform.select({
            ios: {
                marginBottom: 0
            },
            android: {
                marginTop: 10,
                marginBottom: 10
            }
        })
    }


});

export default AuthForm;