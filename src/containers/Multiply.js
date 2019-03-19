import React from 'react';
import {View, Text} from 'react-native';

const multiply = (WrappedComponent) => (
    <View>
    <Text>Multiply</Text>
    {WrappedComponent}
</View>
);

export default multiply;