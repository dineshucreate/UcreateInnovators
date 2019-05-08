import React,{Component} from 'react';
import {Text,ImageBackground, Image,View,TouchableOpacity} from 'react-native';

import styleReduxLogin from './style'
import { connect } from 'react-redux';

import { loginRequest } from './action'

 class LoginRedux extends Component{
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
    apiCall=()=>{
        const { loginRequest, navigation } = this.props;
        const { email, password, loading } = this.state
        loginRequest(email, password, navigation);
    }
   
    render(){
        return(
            <View style={styleReduxLogin.container}>
            <ImageBackground source={require('../assets/global_bg.png')} style = {styleReduxLogin.container}>
            <View style = {styleReduxLogin.view}>
                <Image source={require('../assets/ic_im_logo.png')} style={styleReduxLogin.imageView}></Image>
                <TouchableOpacity onPress={this.apiCall}>
                    <Text style={styleReduxLogin.buttonText}>LOGIN REDUX</Text>
                </TouchableOpacity>

                    </View>
            </ImageBackground>
            </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginRedux);
