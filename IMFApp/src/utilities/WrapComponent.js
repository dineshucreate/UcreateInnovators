import React from 'react';
import { View, Text } from 'react-native';

const wrapComponent = (WrappedComponent) => (
    <View>
        <Text>Wrapped Components</Text>
        {WrappedComponent}
    </View>
);

export default wrapComponent;