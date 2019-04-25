import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from './styles'
import {emailChanged, passwordChanged, loginClicked} from './actions'
import {connect} from 'react-redux'
class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput onChangeText={(text) => this.props.emailChangedLocal(text)} style={styles.styleTextInput} placeholder='Email'></TextInput>
                <TextInput onChangeText={(text) => this.props.passwordChangedLocal(text)} style={styles.styleTextInput} placeholder='Password'></TextInput>
                <TouchableOpacity onPress={()=> this.props.loginClickedLocal(this.props.email, this.props.password)} style={styles.styleTouchableOpacity}><Text style={styles.styleTouchableOpacityText}>Login</Text></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email:state.login.email,
        password:state.login.password
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        emailChangedLocal: (text) => dispatch(emailChanged(text)),
        passwordChangedLocal: (text) => dispatch(passwordChanged(text)),
        loginClickedLocal: (email, password) => dispatch(loginClicked(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)