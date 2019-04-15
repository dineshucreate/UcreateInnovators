import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import myStyle from './style';


class CustomButton extends Component {

    constructor() {
        super();
        this.props = {

        };
    }
    render() {
        const { myText, myCustomClick } = this.props;
        return (
            <TouchableOpacity 
            style={myStyle.container}
            title={myText}
            onPress={() => myCustomClick()}
            > 
             <Text>{myText}</Text>
            </TouchableOpacity> 
        );
    }
}
export default CustomButton;
