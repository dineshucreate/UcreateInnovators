import { View, ImageBackground, Image, ToastAndroid, Alert } from 'react-native';
import splash from './../splash/style';
import { AsyncStorage } from 'react-native';
import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen'

class FirstScreen extends React.Component {
    static navigationOptions = {
        header: null
    };


    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('LoginDone');
            console.log("_retrieveData:" + value);
            setTimeout(() => {
                SplashScreen.hide();
                this.moveScreen(value);
            },1000);

        } catch (error) {
            // Error retrieving data
        }
    };

    moveScreen = (value) => {
        if (value != null) {
            // We have data!!
            this.tabScreen()
            console.log("_retrieveData:" + value);
        }
        else {
            this.loginScreen()
        }
    }
    

    tabScreen = () => {
        this.props.navigation.navigate('MainApp')
    }
    drawerScreen = () => {
        this.props.navigation.navigate('MyDrawerNavigator')
    }

    

    componentDidMount() {
        this._retrieveData()
    }
    loginScreen = () => {
        this.props.navigation.navigate('Login')
    }
    listScreen = () => {
        this.props.navigation.navigate('PractiseFlatList')
    }

    render() {
        const { navigate } = this.props.navigation;
        console.log('...Render.......  ' + this.props);

        return (
            // <ImageBackground source={require('../../assets/global_bg.png')}
            //     style={splash.containerImage}>

            //     <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
            //         <Image style={{ width: 250, height: 130, resizeMode: 'contain' }}
            //             source={require('../../assets/ic_im_logo.png')} />
            //     </View>
                <View>
            </View>

        );
    }
}
export default FirstScreen;