import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import myStyle from './style';

const CustomLoader = (props) => {
    const { headerText } = props;
    return (
        <View style={myStyle.container}>
            <View style={myStyle.innerView}>
                <Text style={{ textAlign: 'center' }}>{headerText}</Text>
                <ActivityIndicator color='#ffffff' />
            </View>
        </View>
    );
};
export default CustomLoader;
