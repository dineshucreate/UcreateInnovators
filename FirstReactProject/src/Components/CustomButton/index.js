import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import myStyle from './style';

const CustomButton = (props) => {
        const { myText, myCustomClick } = props;
        return (
            <TouchableOpacity 
                onPress={() => myCustomClick()}
            > 
             <Text style={myStyle.container}>{myText}</Text>
            </TouchableOpacity> 
        );
};
export default CustomButton;
