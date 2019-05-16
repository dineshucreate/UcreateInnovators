import { Image, View } from 'react-native';
import React from 'react';
import LogoImageAuth from '../../assets/nba_login_logo.png'

const AuthLogo = () => {
    return (
        <View style={{alignItems:'center'}}>
            <Image source={LogoImageAuth}
                resizeMode={'center'}
                style={{
                    width: 170,
                    height: 150
                }} />
        </View>

    )
}
export default AuthLogo;