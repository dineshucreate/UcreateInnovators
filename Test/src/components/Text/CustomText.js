import React, { Component } from 'react';
import {Text} from 'react-native'
export default class CustomText extends Component {
    render() {
        const {val1, val2} = this.props
        return (
            <Text>{val1 + val2}</Text>
        )
    }
}