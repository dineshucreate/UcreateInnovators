import React,{Component} from 'react';
import {Text,ImageBackground, Image,View, StyleSheet,TouchableNativeFeedback} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SignUpAndLoginScreen extends Component{

    render(){
        return(
            <View style={styles.container}>
            <ImageBackground source={require('../assets/global_bg.png')} style = {styles.container}>
            <View style = {styles.view}>
                <Image source={require('../assets/ic_im_logo.png')} style={styles.imageView}></Image>
                <TouchableOpacity >
                    <Text style={styles.buttonText}>CREATE AN ACCOUNT</Text>
                </TouchableOpacity>

                <Text style={{color:"#06878A", fontWeight:'bold',marginTop:30}}>LOG IN</Text>
                
            </View>
            </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'100%',
    },view:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    imageView:{
        width:225,
        height:200,
    },
    // buttonView:{
    //     width:200,
    //     height:50,
    //   //  backgroundColor:'#06878A',
    //     borderRadius:3,
    // },
    buttonText:{
        padding:15,
        color:"#fff",
        backgroundColor:'#06878A',
        textAlign:'center',
        marginTop:30,
        fontWeight:'bold',
        borderRadius:3,
    }
})