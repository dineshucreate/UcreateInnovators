import React from 'react'
import {TextInput} from 'react-native'
export default CustomTextInput = (props) => {
    return (
        <TextInput onChangeText={props.onChangeText} style={{backgroundColor:'red', width:'80%'}}/>
    )
}