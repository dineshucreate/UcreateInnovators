import React from 'react';
import { View, Text } from 'react-native';

const multiply = (WrappedComponent) => (
    <View>
        <Text>Wrapped Components</Text>
        {WrappedComponent}
    </View>
);

export default multiply;