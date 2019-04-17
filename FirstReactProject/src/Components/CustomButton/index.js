import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import myStyle from './style';

const CustomButton = (props) => {
        const { myText, myCustomClick } = props;
        return (
            <TouchableOpacity 
            style={myStyle.container}
            onPress={() => myCustomClick()}
            > 
             <Text>{myText}</Text>
            </TouchableOpacity> 
        );
};
export default CustomButton;
