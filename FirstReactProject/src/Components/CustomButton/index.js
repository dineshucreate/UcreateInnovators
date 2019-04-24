import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import myStyle from './style';

const CustomButton = (props) => {
        const { myText, myCustomClick, customStyle } = props;
        return (
            <TouchableOpacity 
                onPress={() => myCustomClick()}
            > 
             <Text style={[myStyle.container, customStyle]}>{myText}</Text>
            </TouchableOpacity> 
        );
};
export default CustomButton;
