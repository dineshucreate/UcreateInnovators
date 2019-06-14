import React, { Component } from 'react';
import { NavigationAction } from 'react-navigation';
import { Image, View, TouchableOpacity } from 'react-native';
import backIcon from '../../assets/ic_back.png'


const Header = (props) => {
    const { viewStyle, imageStyle } = styles;
    return (
        <View style={viewStyle }>
            <TouchableOpacity onPress={() => {
                // const action = NavigationActio();
                // props.navigation.dispatch(action);
                props.navigation.goBack();
                // props.navigation.navigate('dashboard');
            }}>
                <Image source={backIcon} style={imageStyle} />
            </TouchableOpacity>
        </View>

    )
}
const styles = {
    viewStyle: {
        backgroundColor: '#001338',
        width:'100%',
        height:50

    },
    imageStyle: {
        width: 35,
        height: 35,
        left: 10,
        top:7,
        justifyContent: 'center',
        alignItems: 'center',
    },

};

export default Header;