import React, { Component } from 'react';

import { Image, View, TouchableOpacity } from 'react-native';
import backIcon from '../../assets/ic_back.png'


const HeaderNews = (props) => {
    const { viewStyle, imageStyle } = styles;
    return (
        <View style={viewStyle }>
            <TouchableOpacity onPress={() => {
                props.navigation.navigate('dashboard');
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

export default HeaderNews;