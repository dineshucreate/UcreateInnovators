import React, { Component } from 'react';

import { Image } from 'react-native';
import LogoImag from '../../assets/nba_login_logo.png'


const LogoHeader = () => {
    return (
    <Image
        source={LogoImag}
        style={{ width: 70, height: 35 }}
        resizeMode='contain'
    />
    )
}

export default LogoHeader;