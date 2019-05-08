import React, {Component} from 'react';
import {Text,View,Image,ImageBackground, TouchableOpacity} from 'react-native';
import styleReduceLogin from './style'
import{connect} from 'react-redux'
import {loginRequest} from './action'

class reduxLogin extends Component{
constructor(props){
    super(props)
    this.state={
        email: 'y@y.co',
        password: 'Ios@1234',
        loading: false,
        erremail:'',
        errpassword:'',
    }
}

apiCall = () =>{
    const {loginRequest, navigation} = this.props;
    const {email, password, loading} = this.state;
    loginRequest(email, password, navigation);
}



 render(){
     return(
        <View style={styleReduceLogin.container}>
        <ImageBackground source={require('../assets/global_bg.png')} style = {styleReduceLogin.container}>
        <View style = {styleReduceLogin.view}>
            <Image source={require('../assets/ic_im_logo.png')} style={styleReduceLogin.imageView}></Image>
            <TouchableOpacity onPress={this.apiCall}>
                <Text style={styleReduceLogin.buttonText}>LOGIN Dev</Text>
            </TouchableOpacity>

                </View>
        </ImageBackground>
        </View>
     )
 }

}

const mapDispatchToProps = (dispatch) =>({
loginRequest:(email,password,navigator) => dispatch(loginRequest(email,password,navigator)) 
})

const mapStateToProps = (state) =>{
    return{
        loading:state.login.loading,
        loginData: state.login.loginData,
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (reduxLogin);
